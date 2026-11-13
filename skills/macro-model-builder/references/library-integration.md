# Finding and citing base papers

How to get the papers a model is built on, and cite them in the sketch. If the user's profile
(`~/.config/model-builder/profile.md`) describes their own library or fetching protocol, follow
that instead of this note wherever the two differ.

## Getting a base paper

1. **Check what the user already has** before looking further: their paper folder or reference
   manager, and the project's `.bib`. The profile says where these are; without one, ask once.
2. **Find it by DOI** or on the publisher's page. For a working paper, use the version the
   authors post (their page, NBER, CEPR, SSRN, arXiv, RePEc). Prefer the published version when
   the build follows its equations.
3. **When a paper can't be reached** from this session (a paywall, no network), give the user
   the exact reference and DOI, note it in `PROGRESS.md`, and carry on without it rather than
   block the build. Never look for pirated copies.
4. **Read what the build needs**: usually the model section and the calibration table.

## Citing in the sketch

- Cite with BibTeX keys from the project's `.bib` (`refs.bib` beside `main.tex` by default; the
  profile may name another). Add an entry by copying it from the publisher, the DOI service
  (`https://doi.org/<DOI>` with the `Accept: application/x-bibtex` header), or the user's
  reference manager; never type one from memory.
- The template uses `\bibliographystyle{aer}` with natbib (`\citet`, `\citep`).
- Never invent a citation. If a reference can't be checked, say so and leave it out.
- Paper PDFs stay where the user keeps papers, never in the model project's folder.
