<!-- BEGIN:turborepo-agent-rules -->

# This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": false` in the root `turbo.json` or `turbo.jsonc` to opt out; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.
<!-- END:turborepo-agent-rules -->

# Loops and graphs — how agents work in this repo

Playbook adapted from "Loops and Graphs: how to stop babysitting agents and
only approve the last step" (@hanakoxbt, Aug 2026). Thesis: *a loop makes a
unit of work correct without you; a graph decides which units exist at all.*

## Loops: every unit ends in a check that can fail

A unit of work is only done when its loop (produce → check → correct) ends
green on a **programmatic** check. "Looks good" and "no errors were raised"
are not checks — absence of an error is not evidence of correctness.

Project checks, by unit type:

| Unit of work | Loop check (must exit 0) |
| --- | --- |
| Library source (`src/`) | `npm run check` (astro check) + `npm test` |
| Formatting/lint | `npm run lint` (biome + eslint, `--max-warnings 0`) |
| Registry / demo wiring | `npx tsx web/scripts/audit-demo-ids.ts` (0 problems) + `registry-consistency` test |
| Docs content md | regenerate via `npx tsx web/scripts/gen-docs.ts`; never hand-edit generated files |
| Docs site runtime | dev server page loads; demo verified in the browser, not just built |

## Graph: split work by blast radius, not by folder

Adding or changing a component decomposes into bounded units — registry
entry, demo file, content md, wiring (`entries.ts`, `index.ts`,
`Demos.astro`), browser verification — each with its own loop above. Failed
units go back to their producer, not the whole batch.

## Gates open on blast radius, not confidence

- **Reversible + contained** (docs edits, demo previews, regenerating md):
  proceed and self-verify with the loop checks.
- **Reversible but wide** (directory/package renames, dependency rebuilds,
  lockfile regeneration): proceed only with the full check suite green and a
  summary of every touched path.
- **Hard to reverse** (`npm publish`, `git push`, deleting tracked files or
  user data): the lane does not open without explicit human approval.

Confidence — the model's or the human's — is never the gate signal.

## The human approves one step: the merge

Do the loops, respect the gates, and stop with a summary of what was
verified and what remains. Commits and pushes only on request.
