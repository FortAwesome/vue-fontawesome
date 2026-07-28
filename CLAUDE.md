# CLAUDE.md

See @AGENTS.md. Everything needed is in there.

Two things worth holding in mind before you start:

- The project constitution at [`.specify/memory/constitution.md`](.specify/memory/constitution.md) is
  authoritative for all work in this repository, even when not using Spec Kit. It applies **in full to every
  change, however small** — tests run, types check, no exemptions for one-liners.
- `index.js`, `index.es.js`, and `package-lock.json` are build artifacts committed **only at release**. A
  stale bundle on a feature branch is expected: don't flag it, don't regenerate it, don't hand-edit it.
