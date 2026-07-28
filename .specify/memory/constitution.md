# vue-fontawesome Constitution

This constitution governs the `@fortawesome/vue-fontawesome` component library — the official Font Awesome
component for Vue 3. It is authoritative for all work in this repository, whether or not Spec Kit is in use.
Where it conflicts with other guidance, the constitution wins.

**No size exemption.** Every principle applies in full to every change, regardless of how small the diff is.
There is no "it's just a one-liner" tier that skips the tests, the type checks, or the pre-submission
requirements. This library supports three major core versions across an 84-cell CI matrix; a one-line change to
a CSS class list is a change to version-dependent behavior with consequences a trivial-looking diff does not
advertise. Summaries such as [`AGENTS.md`](../../AGENTS.md) exist to reduce how much you must *read* — they
never reduce what you must *satisfy*.

**Scope note**: this document governs the `3.x` branch (Vue 3). The `2.x` branch (Vue 2) is in maintenance and
is not bound by principles that presume the Composition API or Vue 3 rendering semantics.

## Core Principles

### I. Multi-Version Core Compatibility

This library supports three major versions of `@fortawesome/fontawesome-svg-core` simultaneously: `~1`
(Font Awesome 5), `~6`, and `~7`. That range is declared in `peerDependencies` and exercised by the CI matrix.
It is a contract, not an aspiration.

- Support for a core version MUST NOT be dropped without a MAJOR version bump of this package and an explicit
  `peerDependencies` change in the same commit.
- Version-dependent behavior MUST be selected by **feature detection**, not by version-number branching in
  component code. The established pattern is checking for the capability itself — e.g. `if (faParse.icon)` in
  [`normalizeIconArgs`](../../src/components/FontAwesomeIcon.js#L13) — so that a core release that adds or
  removes a capability is handled without a code change here.
- Props and CSS classes that only exist in newer cores (e.g. `widthAuto`, `canvasSquare`, `canvasRoomy`,
  `rotateBy`, `flip360`, `buzz`, `float`, `jello`, `spinSnap*`, `swing`, `wag`) MUST be accepted and passed
  through unconditionally, and MUST carry an inline comment naming the first core version that supports them —
  the convention already used throughout [`classList`](../../src/utils.js#L5). Emitting a class an older core
  ignores is correct behavior; throwing, warning, or silently dropping the prop is FORBIDDEN.
- Tests that exercise a capability only present in some cores MUST gate on `coreHasFeature(...)` from
  [`__fixtures__/helpers.js`](../../src/components/__fixtures__/helpers.js#L28) and MUST provide an `else`
  branch asserting the feature is genuinely absent. A gated test with no negative branch silently becomes a
  no-op when the matrix swaps cores.
- New feature flags MUST be added to `coreHasFeature` rather than inlining `pkg.version` parsing at the call site.

**Rationale**: Consumers upgrade Font Awesome core and this component on independent schedules. A component that
hard-codes assumptions about one core version breaks the majority of the install base on every core release.
Feature detection makes the library forward-compatible with core changes that have not shipped yet.

### II. Zero Runtime Dependencies

The `dependencies` field in `package.json` MUST remain empty.

- Everything this library needs at runtime MUST come from `peerDependencies` (`vue`,
  `@fortawesome/fontawesome-svg-core`) or from the JavaScript standard library.
- Adding a runtime dependency requires explicit maintainer approval and a MINOR version bump at minimum; it is
  a change to the consumer's dependency graph, not an internal detail.
- `devDependencies` additions SHOULD be justified in the PR description. Prefer extending existing tooling
  (Vitest, Rollup, Babel, Prettier) over introducing a parallel tool that does the same job.
- Node-only APIs MUST NOT be used in `src/` — the bundle runs in browsers and in SSR, and `src/**.js` is
  published directly via the `files` field in `package.json`.

**Rationale**: This is a thin adapter between two libraries the consumer already has. Every runtime dependency
is a version conflict, a bundle-size increase, and a supply-chain surface imposed on every downstream app.

### III. Public API Surface & Type Fidelity

[`index.d.ts`](../../index.d.ts) is hand-maintained and is part of the public API. It is not generated.

- Any change to a component's props, their accepted types, or the set of exported symbols MUST be reflected in
  `index.d.ts` in the **same commit** as the source change.
- Every such change MUST be accompanied by a corresponding assertion in
  [`types-test/index.test-d.ts`](../../types-test/index.test-d.ts), verified with `npm run test:types`.
  A type change with no type test is not complete.
- Type tests MUST cover the **rejection** case as well as the acceptance case where a prop is constrained.
  Asserting only that valid input compiles does not prove invalid input fails.
- Types MUST type-check against the floor of the supported Vue range (`3.0.x`) as well as the ceiling
  (`3.5.x`). Relying on a helper type that older Vue does not export is a breaking change for consumers on the
  floor, even though it compiles locally. CI covers both cells; do not weaken that.
- Removing or narrowing an exported type, prop, or component is a MAJOR change.

**Rationale**: Type regressions do not fail at runtime — they fail in a consumer's editor and build, often
several versions after the change landed. Hand-maintained types drift silently unless the type test is treated
as non-optional.

### IV. Simplicity & Minimal Surface

The library MUST stay small and solve only the problem it exists to solve: rendering Font Awesome's SVG-with-JS
output as Vue vnodes.

- Changes MUST NOT add features, refactoring, or "improvements" beyond what was requested.
- New props MUST correspond to a documented Font Awesome core capability. Convenience props that could be
  expressed with existing props, `class`, or `style` are FORBIDDEN — they are permanent API surface bought for
  a marginal ergonomic gain.
- Abstractions MUST NOT be created for one-time operations; three similar lines beat a premature abstraction.
- Error handling MUST NOT be added for cases that cannot occur. Where a genuine misuse is worth surfacing, use
  the existing [`log`](../../src/logger.js) helper (a `console.error` gated on non-production) rather than
  throwing — a missing icon MUST NOT crash the consumer's render.
- Backward-compatibility hacks (unused `_vars`, dead re-exports, `// removed` comments) are FORBIDDEN. Deleted
  code is deleted.
- Deprecated props (e.g. `fixedWidth` as of core v7) MUST be kept working and marked with an inline comment
  until a MAJOR release removes them.

**Rationale**: This package is installed in a very large number of applications and is rarely thought about by
the people who depend on it. Small surface, few behaviors, and no surprises are the features.

### V. Test Coverage Is Non-Negotiable

Every code change to `src/` MUST land with tests in the same PR.

- New props MUST have tests covering: the prop's effect on rendered output, its default (absent) behavior, and
  its `validator` rejection path where one exists.
- Bug fixes MUST land with a regression test that fails against the pre-fix code. A fix with no failing-first
  test is not verifiable and SHOULD be rejected in review.
- Tests MUST use Vitest with `@vue/test-utils`, and MUST mount through the helpers in
  [`__fixtures__/helpers.js`](../../src/components/__fixtures__/helpers.js) (`mountFromProps`,
  `compileAndMount`, `compileWithTemplate`) rather than calling `mount` directly, so that version gating and
  mount configuration stay in one place.
- Assertions SHOULD target rendered structure (element, attributes, classes) rather than raw HTML string
  matching, which breaks on incidental attribute-ordering changes across core versions.
- Icons used in tests MUST come from [`__fixtures__/icons.js`](../../src/components/__fixtures__/icons.js).
  Adding an icon to the fixture is preferred over importing from `free-solid-svg-icons` inside a test file,
  because the free-icons package version is swapped by the CI matrix.
- Tests MUST pass against **all** supported cores, not just the default v7 devDependency. See
  [`DEVELOPMENT.md`](../../DEVELOPMENT.md) for the `npm install --no-save` swap procedure. Verifying only the
  default cell is insufficient for any change that touches version-dependent behavior.
- A test suite run MUST NOT leave `package-lock.json` modified. After a version swap, restore it with
  `git checkout -- package-lock.json`.

**Rationale**: The support matrix is 3 cores × 6 Vue minors × 2 Node versions. No contributor can reason about
that space by inspection, and CI is the only thing that actually knows whether a change is safe.

### VI. Framework-Family Consistency

This component is one of four official Font Awesome framework components (Vue, React, Angular, Ember). A
capability that exists in the others SHOULD be named and shaped the same way here.

- Prop names MUST match Font Awesome's documented API naming, camelCased for Vue (`spinPulse` for
  `fa-spin-pulse`, `swapOpacity` for `fa-swap-opacity`). Inventing a Vue-specific name for a cross-framework
  capability is FORBIDDEN.
- Before adding a feature, check how [react-fontawesome](https://github.com/FortAwesome/react-fontawesome),
  [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome), and
  [ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome) expose it. Diverging requires a
  rationale in the PR description.
- Feature parity with the [SVG with JavaScript](https://fontawesome.com/docs/web/setup/host-yourself/svg-js)
  implementation is the project's first goal, per [`CONTRIBUTING.md`](../../CONTRIBUTING.md). Where this
  library and core disagree about behavior, core is authoritative.
- Vue-idiomatic behavior (reactivity, `attrs` fallthrough, slot semantics) is where this library SHOULD differ
  from its siblings — that is the adapter's job. API naming is not.

**Rationale**: Users move between framework ecosystems and read Font Awesome's shared documentation, which is
written once for all four components. Gratuitous naming divergence makes that documentation wrong.

### VII. Build Artifacts & Release Discipline

The built bundles and the lockfile are committed, but only at release.

- [`index.js`](../../index.js) and [`index.es.js`](../../index.es.js) are Rollup output. They MUST NOT be
  hand-edited, and they MUST NOT be committed on feature branches — a stale or absent bundle diff on a feature
  branch is expected and MUST NOT be flagged in review.
- `package-lock.json` MUST NOT be committed on feature branches either, except when the change is itself a
  dependency change. Version-swap testing dirties the lockfile; restore it before committing.
- Both bundles and the lockfile ARE committed as part of the release commit, following the numbered procedure
  in [`DEVELOPMENT.md`](../../DEVELOPMENT.md#release-this-project). That procedure is authoritative; do not
  improvise a release.
- Version bumps MUST follow semantic versioning as applied to the **consumer-visible** surface: props, exported
  symbols, types, `peerDependencies` ranges, and rendered output. An internal refactor with identical rendered
  output is a PATCH.
- [`CHANGELOG.md`](../../CHANGELOG.md) MUST be updated in the release commit with entries covering everything
  since the previous release.

**Rationale**: Committed bundles on feature branches produce enormous, unreviewable diffs and constant merge
conflicts, and they tempt contributors into editing generated code. Confining them to the release commit keeps
the reviewable diff honest while preserving the published-artifact history in git.

## Development Standards

### Code Organization

- Component implementations reside in [`src/components/`](../../src/components/), one component per file, each
  a `defineComponent` default export with an explicit `name`.
- Shared pure helpers reside in [`src/utils.js`](../../src/utils.js). The abstract-node → vnode translation
  lives in [`src/converter.js`](../../src/converter.js) and is the only place that should know about the shape
  of core's `abstract` output.
- Public exports are declared in [`src/index.js`](../../src/index.js) and MUST stay in sync with
  [`index.d.ts`](../../index.d.ts).
- Components MUST use the Composition API `setup()` returning a render function, matching the existing
  components. The Options API MUST NOT be used for new components in this branch.
- Test fixtures reside in [`src/components/__fixtures__/`](../../src/components/__fixtures__/); tests reside in
  [`src/components/__tests__/`](../../src/components/__tests__/) as `*.test.js`.
- New files added under `src/` MUST be covered by the `files` globs in `package.json`
  (`src/components/**.js`, `src/**.js`) or explicitly added to them — an uncovered file is missing from the
  published tarball.

### Formatting & Style

- All source MUST be formatted with Prettier using the committed [`.prettierrc`](../../.prettierrc): no
  semicolons, single quotes, 2-space indent, 160-column print width, no trailing commas.
- `console.log` and commented-out code MUST NOT be committed. Diagnostic output goes through
  [`src/logger.js`](../../src/logger.js).
- Comments SHOULD explain *why*, not *what* — with one standing exception: comments naming the minimum core
  version required by a prop or CSS class are REQUIRED (Principle I) and MUST NOT be stripped as noise.
- Node version for development is pinned in [`.tool-versions`](../../.tool-versions); CI additionally tests
  the Node versions listed in the workflow matrix.

### Testing Requirements

- Test runner is Vitest (`npm run test`), configured in [`vitest.config.js`](../../vitest.config.js) with the
  `jsdom` environment.
- Type tests run separately via `npm run test:types` (`vitest run --typecheck.only`) against
  [`types-test/`](../../types-test/).
- SSR-sensitive changes MUST be exercised against `@vue/server-renderer`, which ships in lockstep with `vue`
  and is version-matched in CI.
- Tests MUST NOT depend on network access, timers, or the ambient DOM state left by another test.

### Public API Types

- `index.d.ts` MUST declare props with the narrowest accurate type. Where a runtime `validator` constrains a
  prop to a fixed set (e.g. `size`, `pull`, `rotation`, `flip`), the type MUST be the corresponding string
  literal union, not `string`.
- The `types-test/tsconfig.json` settings define the strictness contract; loosening them to make a change
  compile is FORBIDDEN.

## Quality Assurance

### Pre-Submission Requirements

Before opening a PR, all of the following MUST pass locally:

1. `npm run test` — unit tests against the default (v7) core
2. `npm run test:types` — public API type checks
3. `npm run build` — the bundle builds without error
4. Prettier formatting is clean
5. `git status` shows no unintended `package-lock.json`, `index.js`, or `index.es.js` changes (Principle VII)

For any change touching version-dependent behavior, the multi-core swap procedure in
[`DEVELOPMENT.md`](../../DEVELOPMENT.md) MUST also be run for v6 and v5 (core `~1`).

### Continuous Integration

[`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs on every push and is the authority on whether
a change is safe.

- The build matrix covers `fontawesome-svg-core` `{7.x, 6.x, 1.2.x}` × `free-solid-svg-icons` `{7.x, 6.x, 5.x}`
  × Vue `{3.0.x … 3.5.x}` × Node `{24.x, 26.x}`.
- The `peer-check` job runs `npm install --strict-peer-deps` at the lockfile versions, because the build matrix
  uses `--legacy-peer-deps` to force version swaps and therefore cannot catch genuine peer conflicts.
- Narrowing the matrix — dropping a core, a Vue minor, a Node version, or the `peer-check` job — requires
  explicit maintainer approval and a note in the PR describing what coverage was given up. Silent narrowing is
  FORBIDDEN.
- A red CI cell MUST be understood before merge. "Flaky, re-ran it" without a diagnosis is not acceptable for a
  matrix whose whole purpose is catching version-specific breakage.

### Release Discipline

The release procedure in [`DEVELOPMENT.md`](../../DEVELOPMENT.md#release-this-project) is authoritative and MUST
be followed in order. In particular:

- Tests and type tests are run **first**, before anything is built or published.
- This package publishes to **two** registries (`registry.npmjs.org` and `npm.fontawesome.com`) with a
  `latest-3` tag plus a `latest` dist-tag on each. Publishing to only one leaves the registries divergent.
- Pre-releases MUST use `--tag` / `--npm-dist-tag` so they do not become `latest`.
- A GitHub release with the CHANGELOG details MUST be created for every published version.

## Governance

This constitution supersedes other development practices for this repository. All pull requests and code
reviews MUST verify compliance with these principles.

### Amendment Process

1. Proposed amendments MUST be documented with rationale.
2. Amendments MUST specify the version bump type (MAJOR / MINOR / PATCH) for **this document**, which versions
   independently of the npm package.
3. Any Spec Kit templates present under `.specify/templates/` MUST be updated in the same change.
4. [`AGENTS.md`](../../AGENTS.md) MUST remain an accurate summary — its always-on core and routing table MUST
   be updated whenever a principle is added, removed, or renumbered. Tool-specific files
   ([`CLAUDE.md`](../../CLAUDE.md)) delegate to `AGENTS.md` and MUST NOT restate its guidance, so that there is
   only one place to keep current.
5. The version and `Last Amended` date in the footer MUST be updated.

Constitution versioning: MAJOR = a principle removed or redefined in a way that invalidates prior compliance;
MINOR = a principle or binding section added; PATCH = clarification with no change in binding force.

### Compliance Review

Reviewers MUST verify, before approval:

- **Principle I** — version-dependent behavior uses feature detection; new props carry a minimum-core-version
  comment; gated tests have a negative branch.
- **Principle II** — `dependencies` is still empty; no Node-only APIs in `src/`.
- **Principle III** — `index.d.ts` updated in the same commit as any prop/export change, with a matching
  assertion in `types-test/index.test-d.ts`.
- **Principle IV** — no scope creep; new props map to a real core capability; no dead code or compatibility
  shims.
- **Principle V** — tests present and failing-first for bug fixes; helpers and fixtures used; multi-core
  verification stated in the PR description when version-dependent behavior is touched.
- **Principle VI** — prop naming matches Font Awesome's documented API and the sibling framework components;
  divergence justified.
- **Principle VII** — no `index.js` / `index.es.js` / `package-lock.json` churn on a feature branch; version
  bump type matches the consumer-visible impact.

Violations MUST be justified explicitly in the PR description. Merges that bypass the CI matrix or the release
procedure MUST be reverted and re-landed correctly.

**Version**: 1.0.0 | **Ratified**: 2026-07-22 | **Last Amended**: 2026-07-22
