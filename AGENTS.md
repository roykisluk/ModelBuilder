# Model Builder — rules for agents

What this is: a Claude Code plugin (`.claude-plugin/`) holding one skill, `skills/macro-model-builder/`, and its
companion claude.ai page, `skills/macro-model-builder/assets/model-builder.html`. Codex reads the same manifests.

## Rules

- This repository is public. Nothing personal goes into a file or a commit message: no names, e-mail addresses, home
  paths, private repositories or machines, artifact links, or anyone's model, draft or chat. Personal setup belongs in
  the user's profile (`~/.config/model-builder/profile.md`) or in a page's stored data (`model/ref`), never here.
  `tools/clean-check.sh` checks files and history against a deny-list kept outside the repository; `tools/pre-push`
  runs it (install: `ln -s ../../tools/pre-push .git/hooks/pre-push`). `tools/clean-check.sh` is a copy of
  ResearchRoom's; change it there first.
- The page in `assets/` is the only copy. A change made to a live page on claude.ai comes back here, and anything
  project-specific in it goes to that page's `model/ref` instead.
- Run `node tools/check-page.js` after any change to the page. It runs the parts of the page marked
  `/* check:begin */ … /* check:end */`: the tutor's input, the draft links, the stored macros and the reader link.
  A function the check needs goes inside a marked block.
- Stored data reaches the page's HTML in three places. `short` goes into a pattern (escape it), `reader` into a link
  (claude.ai addresses only), `macros` into the rendered sketch (escaped text, with a plain class name). Keep each
  guard and its check.
- `model/ref` is seeded once and then changed only with `update`, so no field is lost.
- The skill must work without the page (Codex, or any agent without artifact tools): the page steps stay marked
  Claude Code only.
- Paths in `SKILL.md` are relative to its folder; Codex does not expand `${CLAUDE_SKILL_DIR}`.

## Lesson log

Newest at the bottom. Each entry: symptom → root cause → fix.

- 2026-11-13. Symptom: the history check flagged the `CLAUDE.md` import line as an e-mail address. Root cause: in a
  diff the line starts with a plus sign, which is a valid local part right before `@AGENTS.md`. Fix: `CLAUDE.md` puts
  a word before the import (`See @AGENTS.md`).
- 2026-11-13. A brief always holds LaTeX, so it is full of `$`. Filling `{{brief}}` with `String.replace(x, string)`
  would turn `$$` into `$` and `$&` into the placeholder. `fill()` uses a replacer function; `check-page.js` test 2
  fails if that changes.
- 2026-11-13. `\atype` and `\moment` stay built into the page because `assets/template.tex` defines them; only a
  sketch's own macros go in `model/ref.macros`.
- 2026-11-13. The published page carries the host's document skeleton (a doctype line first, `</body></html>` last),
  as the live page did. A full document is published as it is, not wrapped again.
- 2026-11-13. Symptom: a headless browser check of the page showed the "open this page inside Claude" banner on a
  reload, though a stub `window.claude` was installed. Root cause: chrome-devtools `navigate_page` applies its
  `initScript` to the next navigation only. Fix: pass the stub on every navigation, and assert `!!window.claude`
  before reading any result.
