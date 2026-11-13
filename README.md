# Model Builder

A skill that tutors you through building a macroeconomic model, and writes it down as you go. You settle the question,
the mechanism and the experiment, pick base papers, then build the model block by block: environment, agents,
markets, equilibrium, the experiment. By default you do the derivations that carry the mechanism, and the tutor sets up
each step and checks your work. The output is a LaTeX sketch (`main.tex`, compiled to `main.pdf`) and a short
`PROGRESS.md` that lets the next session pick up where you stopped.

In Claude Code the skill can also set up a **companion page** on your claude.ai account: the tutor chat on the left,
and on the right the sketch (LaTeX source, a rendered page, an outline), the PDF of the draft you are extending, and
the build's progress. Each model gets its own private page.

Its sibling is Margin Questions (a PDF reader with Claude beside it), and both come from the same author as
ResearchRoom (a dashboard for an empirical research project).

## Install

**Claude Code:**
```
claude plugin marketplace add <owner>/ModelBuilder
claude plugin install model-builder@model-builder
```
Inside a session, the same is `/plugin marketplace add <owner>/ModelBuilder`, then `/plugin install
model-builder@model-builder`. Update with `claude plugin update model-builder@model-builder`.

**Codex** (CLI 0.142 or newer; older versions skip this plugin without a message):
```
codex plugin marketplace add <owner>/ModelBuilder
```
then open `/plugins` in Codex and install `model-builder`. The skill works in chat mode there; the companion page
needs Claude.

## Use

Say what you want to build: "let's build a model of …", "sketch a model of …", "add search frictions to the model",
or "continue the model". To use the page, ask Claude Code to set up a Model Builder page for the model; it publishes a
private copy of `skills/macro-model-builder/assets/model-builder.html` on your claude.ai account and stores the model
there. Say "sync" to bring the page's sketch back into `main.tex` and `PROGRESS.md`.

The page runs only on claude.ai: the tutor's replies, the stored sketch and chat, and the draft's PDF are services
claude.ai gives the page.

## Your profile (optional)

The skill reads `~/.config/model-builder/profile.md` if it exists. It is your own file, outside the plugin, so updates
never touch it. Any of these, in your own words:
- **Name**, for the sketch's author line and the tutor.
- **Background**: the coursework and models you already know, so the tutor skips what you own.
- **Papers**: where you keep them, how you fetch new ones, and any rules (the skill's default is in
  `references/library-integration.md`).
- **LaTeX**: where your `.bib` lives, your compiler, a notation standard.
- **Lean**: the project where you check finished models in Lean 4, if you have one.
- **Margin Questions**: the address of your own copy, which the page links to.
- **Preferences**: anything you want every session to know. The skill proposes lines for this file when you correct
  it twice; it never edits its own files.

## What a page stores

Each page keeps its data in its own storage, which only you and your editors can read. `model/ref` holds the
reference: `title`; `short`, the draft's short name, used for the tab and for citing the draft's equations as
`(short.13)`; `brief`; `order`, the build order; `text`, the draft's equations; and `pdfAssetId`. It can also hold:
- `learner`: the name the tutor uses (default "the learner");
- `reader`: your Margin Questions address (no address, no link);
- `macros`: your sketch's own LaTeX macros for the rendered page, as `{"name": {"tex": "… #1 … #2", "class": "…"}}`;
- `rules`: your own tutor rules, which replace the page's whole, with `{{learner}}`, `{{brief}}`, `{{order}}` and
  `{{short}}` filled in.

## Limits

- Every test ran on one account, the author's. Nothing yet shows that it works on another account.
- Codex was not installed where this was built, so the Codex side is untested. It rests on Codex's documentation and
  source, which say Codex reads the `.claude-plugin/` manifests.
- The builder could not click through a page on claude.ai: no browser it had was signed in. What was checked: the
  page's tutor input, links and macros, offline (`tools/check-page.js`); the page loading in a browser with a stand-in
  for claude.ai; and a fresh page set up by the skill, with the right files, capabilities and stored data. Not
  clicked through by the builder: a real tutor reply, a tutor edit to the sketch and its undo, saving and reloading,
  the draft's PDF tab, clearing the chat, and exporting `main.tex`. The page's code is the author's own page in daily
  use, with names and project details moved into stored data.

## Licence

MIT (`LICENSE`).
