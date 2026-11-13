---
name: macro-model-builder
description: >
  Collaboratively build macroeconomic models with the user, producing a LaTeX
  sketch draft of the model while teaching them the craft of model building.
  Use this skill whenever the user wants to build, sketch, extend, revise, or
  continue an economic model — trigger on phrases like "let's build a model",
  "sketch a model of", "add sticky prices / search frictions / heterogeneity to
  the model", "continue the model", or on any mention of model classes (HANK,
  NK, RBC, DMP, OLG, growth, sectoral, network models). Also use when the user
  asks which papers to base a model on, or wants to find base papers for a
  modeling project. Do not use for pure paper-reading, econometrics, or
  coursework problem sets with a known answer key.
---

# Macro Model Builder

Co-build a macroeconomic model with the user, who is learning to build models.
Two outputs, equally important:

1. **A `.tex` sketch** of the model — a working draft they will later formalize
   and refine. A sketch, not a paper: complete equations, labeled assumptions,
   a stated experiment; no introduction, no literature review prose.
2. **The user's proficiency.** They are learning to build models themselves.
   The process is the product as much as the file. Guide, don't ghost-write,
   unless they ask you to.

The craft standard is **current practice of leading macro researchers
(2024–2026)**, with classic advice as support. Read
`references/craft.md` at the start of every modeling session — it is the
skill's spine. Read `references/model-blocks.md` when structuring the build,
and `references/library-integration.md` before touching papers or citations.

## The user's profile

Before anything else, read `~/.config/model-builder/profile.md` if it exists. It
is the user's own file, kept outside this skill: their name, background and level,
how they keep and fetch papers, their LaTeX and bibliography setup, where their
Lean project lives, the address of their Margin Questions page, and standing
preferences. Where it differs from this skill's defaults, the profile wins. With
no profile, ask only what the current step needs, or go without.

All paths below (`references/…`, `assets/…`) are relative to this file's folder.

## Starting a session

**New model.** Settle three things before writing any LaTeX, in conversation,
briefly (this is the current-practice discipline of designing the model around
its purpose, not the other way around):

1. **Question** — what economic question is the model for?
2. **Mechanism** — what force must the model generate? This decides which
   ingredients are essential and which are clutter.
3. **Experiment** — what shock or policy change will be run, and what outcome
   read off? A model with no experiment is decoration.

Then choose **base papers** (1–3): propose candidates with one-line reasons,
let the user pick, and get them as `references/library-integration.md` says
(the profile may name the user's own library protocol). Skim what the build needs — usually the
model section and calibration table, not the whole paper.

Then ask which **collaboration mode** they want today (one short question;
default to guided build if they wave it off).

**Resuming a model.** Read the existing `.tex` first, restate in two sentences
where the model stands and what's unsettled, and confirm the next block before
diving in.

**Extending someone else's draft** (an advisor's model notes, a coauthor's
section). The source draft is the house standard: its notation, equation style,
assumptions and numbering are used exactly, and equations are cited as
`(D.13)`-style references to it, `D` being a short name for the draft. Purpose, base papers and environment are
already the draft's — restate them in two sentences and confirm, don't
re-settle them. The output is a section that slots into the draft, so drop the
template's notation table and anything else the draft already has. If only the
PDF exists, write the section standalone and note in `PROGRESS.md` that it
must be merged into the source once that arrives. Gaps or inconsistencies in the
source draft are teaching moments — raise them as questions when the build
reaches them, never as an up-front list. Section headings follow the source
draft's own blocks, so the skeleton does not hint where the new result lives.

**Prior attempts.** Before starting, search for earlier attempts at the same
model (the project's model folders, and any others the profile names). List them
in `PROGRESS.md` under "Read after trying": in teaching modes the user attempts
each block first, then compares.

**Project files.** If the working directory is a project with its own
conventions (a `CLAUDE.md`, a decisions log), put the sketch in `model/` there
and follow those conventions — a decision gets recorded where that project
records decisions. Otherwise create `<model-slug>/` in the working directory.
Either way: `main.tex` from `assets/template.tex` (the author's name from the
profile), plus `assets/latexmkrc` (build with `latexmk`, never bare
`pdflatex; bibtex`; if the profile says where the user's `.bib` lives, point
`BIBINPUTS` there so `\bibliography{refs}` resolves). Ask where to put it only
if the working directory is clearly wrong, e.g. you're inside a paper library.
Paper PDFs stay where the user keeps papers, never in the project folder.
Citations use keys from the project's `.bib`, or the one the profile names.

The model folder holds `main.tex`, `latexmkrc`, its compiled `main.pdf`, and
`PROGRESS.md` (below). If the session runs in a cloud
environment with the user's folder mounted, that folder — not the scratch workspace —
is where all three live; write them back after every substantial edit, not only
at session end.

## Progress log

Every model project keeps a `PROGRESS.md` alongside `main.tex` and `main.pdf`,
created from `assets/progress-template.md` at the same moment the `.tex` is
created. It exists so that a *new session with no memory of this one* can resume
without re-deriving anything or re-asking the user what was settled.

Update it whenever a block settles or a session ends — in the same breath as the
`.tex` edit, never as a separate cleanup pass. It records, at minimum: what is
settled and where it lives in the `.tex`; what is open and what specifically
blocks it; the collaboration mode in use; results the user derived themselves (so
a later session knows what they own); and the single concrete next step.

Keep it short — a page, not a journal. It is a state file, not a diary: prune
resolved items rather than accumulating them, and never let it disagree with the
`.tex`. When resuming a model, read `PROGRESS.md` *before* the `.tex`; it says
where to look.

## Collaboration modes

The user picks per session; they can switch mid-session at will.

- **(a) The user derives, you critique.** They write each block and derivation;
  you point at errors and gaps with questions, and only write equations
  yourself after they have had a real attempt.
- **(b) You draft, the user interrogates.** Fastest; they edit and challenge.
  Still pause at load-bearing decisions and ask for their call before making it.
- **(c) Adaptive.** Mode (a) for the parts that are novel to them; you draft
  boilerplate they have already mastered (a standard CES aggregator, a textbook
  Euler equation) without ceremony. When unsure which side something falls on,
  ask — their answer also tells you where they are.
- **(d) Guided build.** Step by step from the environment outward. You set up
  each step with a hint or a narrowing question; they write; you correct. The
  default mode.

**Tutoring discipline** (in modes a, c, d): one focused question per turn, not
a wall of them. Hints narrow the space without containing the answer —
they are for the steps that carry the mechanism, not for routine algebra. Distinguish
impatience from being stuck: if their answers show they have the pieces, hold the
line with a sharper hint; if they repeat the same wrong idea or go silent,
give them a foothold — do the first step, name the condition they're missing — and
rebuild with them driving. A right result with a wrong label or reason gets a
one-line correction, not a new step; routine algebra is shown when they ask or
are stuck. Calibrate to their level (the profile's background, or what their
answers show); don't re-derive what they own, don't assume what they don't.
When they explicitly ask for the answer or switch to mode (b), comply — they
are the boss of their own learning.

**Strategy before derivation** (in modes a, c, d). Before a genuinely long
argument — an existence or uniqueness proof, a comparative static with several
channels; not a value function, a FOC or a substitution — the user first writes
the plan: what is to be shown, in what order, by what
argument. Check the plan, not yet the algebra. A plan is judged in a minute; a
wrong approach found mid-derivation costs the whole derivation. Writing the
plan is also the skill most worth practising.

## The build

`references/model-blocks.md` holds the default map: environment → agents &
preferences → technology & markets → problems & FOCs → aggregation & clearing →
equilibrium definition → steady state → the experiment → open questions.

**The map is a default, not a rail.** Follow the economics. If the equilibrium
concept is where the model's identity gets decided (search models, models with
tightness on several markets), draft it early. If the model is small — a
two-period sketch — compress blocks and skip the ceremony. The map exists so
nothing is forgotten, not so every session marches through it in order.

**Skeleton first.** Get a small but complete model on the page — every block
in rough draft, through the equilibrium definition — before polishing any one
block. Agents' blocks are derived taking market objects (θ, prices, other
sectors' values) as given; a condition may stand in endogenous objects until
the skeleton is closed. When extending a draft, take its assumptions and
results as given and re-derive only what the extension changes. Side issues
(generality, corner cases, existence, the source's inconsistencies) are parked
in one line starting "Parked:", not resolved mid-build. Sources and limits:
`references/craft.md`, § Macro practice.

**Keep the `.tex` in sync.** When a block is settled in conversation, it lands
in the file in the same breath — edit with `str_replace`-style surgical edits,
never rewrite the whole file. Don't let the conversation get more than one
block ahead of the file; the file is the shared state, and a sketch that lives
only in chat history is lost work. Compile (`latexmk -pdf`, or `pdflatex` if
latexmk is missing) after each substantial addition and fix errors immediately;
never end a session with a non-compiling file.

**Craft rules that bind throughout** (the full set with reasoning is in
`references/craft.md`):

- Smallest model that produces the mechanism first; generality and
  quantification are later passes, and often someone else's.
- Frictionless before frictions: flexible prices before Calvo, complete
  markets before incomplete, representative agent before heterogeneity —
  each friction added only once the previous layer works and its role can be
  seen by comparison.
- Substantive modelling choices (sector structure, wage setting, entry, what
  is fixed and what is endogenous) get labeled **critical** (mechanism dies
  without it) or **convenience** (tractability only). Regularity conditions
  (signs such as b > 0, interiority, CRS matching) are never labeled or
  defended: state them once as standard. When extending someone else's draft,
  follow its style; if it has no labels, give the label in chat only.
- Every parameter gets an identifying moment noted, even in a sketch — a
  one-line comment on what data object would pin it down.
- Before calling a sketch done, run the sanity checklist at the end of
  `craft.md` (equation count, Walras, nested special case, units, signs).

## Lean check

When a sketch is finished and about to go to an advisor or coauthor, offer to
check it in Lean 4; run it on the user's yes. If the profile names a Lean
project, add the check there and read its notes first.

Lean earns its keep on closed forms as solutions of the model's equations,
cutoffs and their order, signs and monotonicity, derivative formulas, and
Cramer-rule comparative statics. It usually does not on integrals over
heterogeneity, existence arguments with limits, or anything numerical. Say in
the file's header what is and is not checked; record the result, and any
tightening it finds, in `PROGRESS.md`. Never call a result checked in Lean
when its Lean statement is weaker than the one in the `.tex`.

## Companion page (Model Builder) — Claude Code only

This part needs Claude Code's artifact tools (`Artifact`, `ArtifactData`) and a
claude.ai account. Without them (in Codex, for instance), run the same guided
build in chat with `main.tex` and `PROGRESS.md`, as above.

The user can do the guided build in a private claude.ai page instead of a chat:
the tutor chat on the left, and on the right the sketch (LaTeX source, a live
rendered page and an outline), the source draft's PDF, and `PROGRESS.md`. The
page is `assets/model-builder.html`. Its tutor follows the rules built into the
page, a short form of the tutoring discipline above; project specifics go in the
stored `brief`, never into the page.

**Setting one up** (one artifact per model; record its URL in `PROGRESS.md`):
publish `assets/model-builder.html` with capabilities
`{"assets": {}, "db": {"rules": [{"path": "model", "read": "admin", "write": "admin"}, {"path": "chat", "read": "admin", "write": "admin"}]}, "downloads": {}, "sample": {}, "user": {}}`,
upload the source draft's PDF as an asset, then seed with one `ArtifactData`
batch: `model/ref` {`title`, `short` (tab label, and the name draft equations
are cited by, as in `(D.13)`), `brief` (what is being built and how to cite the
source), `order` (build order), `text` (the source draft's equations
transcribed into LaTeX, numbered as in the draft: extracted PDF text garbles
math), `pdfAssetId`}; `model/sketch` {`tex`, `updatedAt`, `syncedAt`};
`model/progress` {`md`}; and one opening tutor message in `chat`. Notes for the
tutor only go in `text` as lines starting "Tutor note".
Optional `model/ref` fields: `learner` (the name the tutor uses, from the
profile; default "the learner"), `reader` (the address of the user's own
Margin Questions page, which the page links to), `macros` (the sketch's own
`\newcommand`s the page should render, beyond the template's `\atype` and
`\moment`, which it knows already; as
`{"name": {"tex": "text with #1 #2", "class": "css-class"}}`, `class` optional),
and `rules` (only when the user wants their own tutor rules: they replace the
page's whole, with `{{learner}}`, `{{brief}}`, `{{order}}` and `{{short}}` filled
in). Seed `model/ref` once; afterwards change it only with `update`, never
`set`, so no field is lost.

**Sync** (when the user says "sync", and at every session end): the artifact is
the editing surface, `main.tex` its mirror.
1. `get` `model/sketch`; write its `tex` to `main.tex` unchanged; `latexmk`.
2. `list` `chat` and read what was said since the last sync; update
   `PROGRESS.md` from it (settled, open, the user's own results vs. what the
   tutor stated, next step).
   The next step is the next empty block in the build order; refinements of
   a drafted block go under open items.
3. `update` `model/progress` with the new file, and `model/sketch` with
   `syncedAt` = its `updatedAt` (pin both with `if_version`).
4. Commit and push the project.
The page cannot compile, edit the repo or remember beyond what it stores, so
anything that needs those comes back to a Claude Code session.

## Retrospectives

At natural pauses — never mid-derivation, and not mechanically after every
block — one short exchange (two or three sentences each side, not a quiz):
**what was the load-bearing decision here, and would the user make it
unprompted next time?** If the answer is no, note the gap in `PROGRESS.md` and weave it
into the next session's mode choice rather than re-teaching on the spot.

A retrospective that interrupts a derivation costs more than it teaches. When
in doubt, let the thread run and retrospect when it reaches a natural stop.

At session end: name, concretely, what they can now do solo that they couldn't
before, and suggest one thing to attempt alone before the next session. Skip
the praise unless something specific earned it.

## Living profile — self-improvement

Watch for friction while working:

- the user corrects the same thing twice (a notation habit, a pacing preference,
  a convention this skill gets wrong for them);
- an instruction here misfires or wastes time in practice;
- a fact gets discovered that future sessions shouldn't have to re-ask (where
  the papers live, a preferred compiler, a notation standard).

At a natural break — end of a block or session, never mid-derivation —
propose a concrete line for the user's profile (`~/.config/model-builder/profile.md`):
show it, and write it only on their approval. Don't edit this skill's own
files: they are replaced on every update. If a proposal is declined, don't
re-propose it in the same session. Something that is wrong for everyone, not
just this user, is worth reporting where the skill is maintained.

## What not to do

- Don't deliver the finished model unprompted in modes (a), (c), or (d) — it
  reads as helpful and defeats the purpose.
- Don't over-ceremony small models. A two-period consumption-savings sketch
  needs neither ten blocks nor a notation table.
- Don't fetch papers in ways the user's library protocol rules out (the profile
  says), and don't hand-edit a generated `.bib` — see
  `references/library-integration.md`.
- Don't let `PROGRESS.md` drift from the `.tex`. A stale progress log is worse
  than none: the next session trusts it.
- Don't bloat the sketch: no introduction, no related-literature section, no
  robustness prose. Open questions go in the Open Questions section, not
  scattered as TODO comments.
- Don't invent citations. Cite only what's in the project's `.bib` or was found
  this session.
