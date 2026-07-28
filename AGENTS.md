# AGENTS.md

Guidance for AI coding agents working in this repository. This is the authoritative agent-facing document;
tool-specific files (e.g. [`CLAUDE.md`](CLAUDE.md)) delegate here.

This is `@fortawesome/vue-fontawesome` — the official Font Awesome component for **Vue 3**. It is a thin
adapter that turns `@fortawesome/fontawesome-svg-core`'s SVG-with-JS output into Vue vnodes. It is small
(~550 lines of source), has **zero runtime dependencies**, and is installed in a very large number of
applications.

You are on the `3.x` branch (Vue 3). The `2.x` branch (Vue 2) is separate and in maintenance.

## Project Constitution

The project constitution at [`.specify/memory/constitution.md`](.specify/memory/constitution.md) is the source
of truth for this repository's principles and conventions. It is **authoritative for all work in this codebase
— even when not using Spec Kit.** Where it conflicts with other guidance, the constitution wins.

**The constitution applies in full to every change, however small.** The two tiers below control what you need
to _read_, never what you have to _comply with_ — there is no task small enough to be exempt from the tests,
the type checks, or the always-on core. A one-line change to `classList` is a change to version-dependent
behavior across three cores; diff size is not a proxy for blast radius.

With that established: don't read the constitution front to back for a small task. The **always-on core** below
applies to everything; use the **routing table** to load the additional sections relevant to what you're
touching.

### Always-on core (applies to every task)

- **Multi-version core support (§I):** This library supports `@fortawesome/fontawesome-svg-core` `~1` (FA5),
  `~6`, **and** `~7` at the same time. Handle version differences with **feature detection**
  (`if (faParse.icon)`), never version-number branching. New props/classes that only exist in newer cores are
  passed through unconditionally and MUST carry an inline comment naming the minimum core version.
- **Zero runtime dependencies (§II):** `dependencies` in `package.json` MUST stay empty. Everything comes from
  `peerDependencies` (`vue`, `fontawesome-svg-core`) or the standard library. No Node-only APIs in `src/`.
- **Types ship with the change (§III):** [`index.d.ts`](index.d.ts) is hand-maintained public API. Any
  prop/export change updates it **in the same commit**, plus an assertion in
  [`types-test/index.test-d.ts`](types-test/index.test-d.ts) verified by `npm run test:types`.
- **Tests are non-negotiable (§V):** Every `src/` change lands with tests. Bug fixes land with a
  **failing-first** regression test. Mount through the helpers in
  [`src/components/__fixtures__/helpers.js`](src/components/__fixtures__/helpers.js), not `mount` directly.
- **Don't commit build artifacts (§VII):** `index.js`, `index.es.js`, and `package-lock.json` are committed
  **only at release**. Never hand-edit the bundles. A stale bundle on a feature branch is expected — don't
  flag it, don't "fix" it. Version swaps dirty the lockfile; run `git checkout -- package-lock.json`.

### Routing table (read the section that matches the task)

| When your task involves…                                   | Read in the constitution                                                                                         |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Adding or changing a prop**                              | §I Multi-Version Core Compatibility · §III Public API Surface & Type Fidelity · §VI Framework-Family Consistency |
| **Version-dependent behavior** — FA5 vs 6 vs 7 differences | §I · Development Standards → Testing Requirements                                                                |
| **Types** — `index.d.ts`, `types-test/`                    | §III · Development Standards → Public API Types                                                                  |
| **Dependencies** — adding anything to `package.json`       | §II Zero Runtime Dependencies                                                                                    |
| **Writing tests**                                          | §V Test Coverage Is Non-Negotiable · Development Standards → Testing Requirements                                |
| **Scoping / avoiding over-engineering**                    | §IV Simplicity & Minimal Surface                                                                                 |
| **Naming things in the public API**                        | §VI Framework-Family Consistency                                                                                 |
| **Releasing, versioning, CHANGELOG, bundles**              | §VII Build Artifacts & Release Discipline · Quality Assurance → Release Discipline                               |
| **CI, the build matrix, peer deps**                        | Quality Assurance → Continuous Integration                                                                       |

Sections are referenced by heading name (not line number) so this table stays valid if
`/speckit.constitution` regenerates the file.

A row that doesn't match your task means "you don't need to _read_ that section," not "that section doesn't
apply to you." If you're unsure whether a rule is in play, read the section.

## Codebase map

| Path                                                                                                                                                 | What's there                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`src/index.js`](src/index.js)                                                                                                                       | Public exports — must stay in sync with `index.d.ts`                               |
| [`src/components/FontAwesomeIcon.js`](src/components/FontAwesomeIcon.js)                                                                             | The main component; all props declared here                                        |
| [`src/components/FontAwesomeLayers.js`](src/components/FontAwesomeLayers.js) · [`FontAwesomeLayersText.js`](src/components/FontAwesomeLayersText.js) | Layering components                                                                |
| [`src/converter.js`](src/converter.js)                                                                                                               | Core's `abstract` node tree → Vue vnodes. The **only** place that knows that shape |
| [`src/utils.js`](src/utils.js)                                                                                                                       | `classList` (props → `fa-*` CSS classes), `objectWithKey`, `addStaticClass`        |
| [`src/logger.js`](src/logger.js)                                                                                                                     | Non-production `console.error`. Never throw at consumers                           |
| [`src/components/__fixtures__/`](src/components/__fixtures__/)                                                                                       | Mount helpers + `coreHasFeature` version gating, and test icons                    |
| [`src/components/__tests__/`](src/components/__tests__/)                                                                                             | Vitest suites                                                                      |
| [`index.d.ts`](index.d.ts) · [`types-test/`](types-test/)                                                                                            | Hand-maintained types and their tests                                              |
| [`DEVELOPMENT.md`](DEVELOPMENT.md)                                                                                                                   | Multi-core test procedure and the authoritative release steps                      |

## Commands

```bash
npm run test        # Vitest unit tests (jsdom) against the default v7 core
npm run test:types  # type-check index.d.ts via types-test/
npm run build       # development bundle (Rollup)
npm run dist        # production bundle — only run deliberately; output is committed at release
```

Testing against other cores (full procedure in [`DEVELOPMENT.md`](DEVELOPMENT.md)):

```bash
npm install --no-save @fortawesome/fontawesome-svg-core@~6 @fortawesome/free-solid-svg-icons@~6
npm run test
npm install --no-save @fortawesome/fontawesome-svg-core@~7 @fortawesome/free-solid-svg-icons@~7
git checkout -- package-lock.json   # always — the swap dirties the lockfile
```

## Style

Prettier with the committed [`.prettierrc`](.prettierrc): **no semicolons**, single quotes, 2-space indent,
160-column print width, no trailing commas. Match the surrounding code.

Comments explain _why_, not _what_ — with one exception: comments naming the minimum core version a prop or
CSS class requires are **required** and must never be stripped as noise.

## Before you open a PR

**No change is too small for this list.** Run it for a one-line fix, a typo in a prop validator, a comment
change that touches a `.js` file — all of it. The checklist takes seconds; the CI matrix it stands in for is 84
cells plus a strict peer-dependency job, and finding out there instead of here wastes everyone's time.

1. `npm run test` passes
2. `npm run test:types` passes
3. `npm run build` succeeds
4. Formatting is clean
5. `git status` shows **no** unintended `index.js`, `index.es.js`, or `package-lock.json` changes
6. If you touched version-dependent behavior, you ran the suite against v6 and v5 core too — and said so in
   the PR description
