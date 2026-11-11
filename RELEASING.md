# Releasing

AstroUI ships from **tags**. `main` is the development branch, `production`
is what Vercel serves, and npm is published by the Release workflow when a
`vX.Y.Z` tag is pushed.

## Branches and deployments

| Ref | Purpose | Vercel |
| --- | --- | --- |
| `main` | development; docs may describe unreleased work | Preview deployment |
| `production` | released code | Production deployment |
| `vX.Y.Z` | immutable release marker | Tag push starts the Release workflow |

The invariant for every release:

```text
vX.Y.Z tag == package.json version == npm version == production branch HEAD
```

If those four ever disagree, stop and fix it before publishing.

## One-time setup (already done for `v0.1.0`)

`v0.1.0` was published from commit `dc19728`; the tarball's `src/` matches
that commit. The tag and branch are:

```bash
git tag -a v0.1.0 dc19728 -m "v0.1.0"
git push origin v0.1.0

git branch production dc19728
git push -u origin production
```

Then in Vercel: **Project → Settings → Git → Production Branch → `production`**.
Pushes to `main` now produce preview URLs only; production deploys happen
when `production` moves.

Add the npm token once:

1. npmjs.com → **Access Tokens** → **Generate New Token** → **Granular**.
2. Scope it to `@parsakafi`, permission **Read and write**, and enable
   **Bypass 2FA** (required for CI publishing).
3. GitHub → **Settings → Secrets and variables → Actions → New repository
   secret** → `NPM_TOKEN`.

`--provenance` also requires the repository to stay public and the workflow
to keep `id-token: write`.

## Version policy (pre-1.0)

| Change | Bump | Example |
| --- | --- | --- |
| Fix or additive feature (new prop, component, variant) | patch | `0.1.0` → `0.1.1` |
| Breaking change (removed/renamed prop, markup, token) | minor | `0.1.1` → `0.2.0` |
| API stability commitment | `1.0.0` | — |

Every release gets a Keep a Changelog entry and a `web/src/lib/site.ts`
version bump. The release scope is everything since the last tag:

```bash
git log --oneline v0.1.0..main
```

## Release checklist

### 1. Verify `main`

```bash
git switch main
git pull --ff-only
npm ci
npm run lint
npm run check
npm test
npm run build
cd web && npx playwright test --project=chromium && cd ..
```

Visual baselines are `-win32.png`, so run the visual suite on Windows
before tagging. The Release workflow runs the functional specs only.

### 2. Bump the version

```bash
npm version X.Y.Z --no-git-tag-version
```

Do **not** let npm create the tag; the tag is created after the release
commit is reviewed.

### 3. Update the changelog

Move the entries from `## [Unreleased]` under
`## [X.Y.Z] - YYYY-MM-DD`, keep an empty `## [Unreleased]`, and call out
breaking changes with migration notes.

### 4. Update versions and regenerate docs

- `web/src/lib/site.ts` → `version`
- `README.md` → status line
- `docs/` is hand-maintained; `web/src/content/**` is generated:

```bash
cd web
npx tsx scripts/gen-docs.ts
npx tsx scripts/audit-demo-ids.ts
cd ..
```

### 5. Re-run the full suite after the edits

```bash
npm run lint
npm run check
npm test
npm run build
cd web && npx playwright test --project=chromium && cd ..
```

### 6. Commit and push `main`

```bash
git add -A
git commit -m "chore(release): vX.Y.Z"
git push origin main
```

Wait for CI to pass and open the Vercel **preview** URL. Nothing is live
yet.

### 7. Tag and publish

```bash
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

The Release workflow:

1. verifies the tag matches `package.json` and is reachable from `main`
2. runs lint, check, tests, build and the functional e2e suite
3. fails if `src/styles/toast.css` is stale
4. publishes with `--provenance` (skips if the version already exists)
5. creates the GitHub Release from the matching CHANGELOG section

Verify:

```bash
npm view @parsakafi/astro-ui version
npm view @parsakafi/astro-ui dist-tags
```

### 8. Promote production

```bash
git switch production
git merge --ff-only main
git push origin production
git switch main
```

Vercel deploys the production branch. Then verify:

- the version badge on the site matches `X.Y.Z`
- a clean install works:

```bash
mkdir aui-smoke && cd aui-smoke
npm init -y
npm i @parsakafi/astro-ui@X.Y.Z
node -p "require('@parsakafi/astro-ui/package.json').version"
```

## Emergency manual publish

If GitHub Actions is unavailable, run the same checks locally and publish
from the clean release commit:

```bash
npm publish --access public
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

The workflow detects that the version already exists, skips the publish
step, and still creates the GitHub Release. Then promote `production`.

## Hotfix

Fix on `main`, bump the patch, and follow the checklist. Never commit
directly to `production`; it only fast-forwards from `main`.

## Troubleshooting

- **Tag pushed but the workflow failed before publishing**: fix the commit,
  then move the tag (deleting a remote tag is destructive — get approval):

  ```bash
  git tag -d vX.Y.Z
  git push origin :refs/tags/vX.Y.Z
  ```

- **Publish succeeded but promotion failed**: production still serves the
  previous release. Retry the fast-forward; npm is already correct.

- **Production is ahead of npm**: revert `production` to the previous tag
  (destructive — get approval):

  ```bash
  git switch production
  git reset --hard vPREVIOUS
  git push --force-with-lease origin production
  ```

- **`npm publish` returns 403**: check the token scope and 2FA bypass.
- **Provenance fails**: the repository must be public and the workflow must
  keep `id-token: write`.
- **Visual test fails after a version bump**: the version chips are frozen
  to `0.0.0` in `visual.spec.ts`; a diff now means a real UI change.

## Rules

- Never publish from a dirty tree.
- Never push a tag before the release commit is on `main` (the workflow
  checks, but don't rely on it).
- `git push origin main` is a preview, not a release.
- Never hand-edit `web/src/content/**`; regenerate it.
