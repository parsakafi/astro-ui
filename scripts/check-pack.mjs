#!/usr/bin/env node
/**
 * Verifies the published tarball. Run after `npm run build:css` (the
 * prepublish pipeline does this) so `src/styles/toast.css` exists.
 *
 * Guards three regressions the review flagged:
 *  - source-only files (SCSS, tests, docs site) leaking into the package
 *  - exports pointing at files that are not shipped
 *  - the tarball silently growing past its budget
 */
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

const MAX_FILES = 120;
const MAX_PACKED_BYTES = 300_000;

const raw = execSync("npm pack --dry-run --json", {
  cwd: root,
  encoding: "utf8",
  stdio: ["ignore", "pipe", "inherit"],
});
const parsed = JSON.parse(raw);
const manifest = parsed[pkg.name] ?? parsed[0];
if (!manifest) throw new Error("npm pack --json returned no manifest");

const paths = new Set(manifest.files.map((f) => f.path));
const problems = [];

for (const path of paths) {
  if (/\.scss$/.test(path)) problems.push(`SCSS source leaked: ${path}`);
  if (path === "src/env.d.ts")
    problems.push(`repo-only ambient types leaked: ${path}`);
  if (/^(tests|web|scripts|docs)\//.test(path))
    problems.push(`repo-only path leaked: ${path}`);
}

const required = [
  "package.json",
  "index.ts",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "src/styles/tokens.css",
  "src/styles/base.css",
  "src/styles/toast.css",
];
for (const path of required) {
  if (!paths.has(path)) problems.push(`missing required file: ${path}`);
}

// Every literal export target must ship.
const exportTargets = [];
const collect = (value) => {
  if (typeof value === "string") exportTargets.push(value);
  else if (value && typeof value === "object")
    Object.values(value).forEach(collect);
};
collect(pkg.exports);
for (const target of exportTargets) {
  if (!target.startsWith("./")) continue;
  const path = target.slice(2);
  if (!paths.has(path)) problems.push(`export target not shipped: ${target}`);
}

if (manifest.entryCount > MAX_FILES) {
  problems.push(
    `too many files: ${manifest.entryCount} > ${MAX_FILES}`,
  );
}
if (manifest.size > MAX_PACKED_BYTES) {
  problems.push(
    `tarball too large: ${manifest.size} B > ${MAX_PACKED_BYTES} B`,
  );
}

if (problems.length) {
  console.error("check-pack failed:");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `check-pack ok: ${manifest.entryCount} files, ${manifest.size} B packed, ${manifest.unpackedSize} B unpacked`,
);
