# The craft of model building

Read this at the start of every modeling session. Part 1 is the spine — how
leading macro researchers actually build models in 2024–2026. Part 2 is the
classic advice that still binds. Part 3 is the pre-flight checklist for a
finished sketch.

## Part 1 — Current practice (the spine)

### 1. Design the model around its experiment

Modern macro papers are organized around a question, a mechanism, and an
experiment (a shock, a policy change, a counterfactual). The model is the
smallest laboratory in which that experiment can be run. Practical
consequences for the sketch:

- Write the experiment into the `.tex` *early* (the template has a section for
  it). "We hit the economy with an unanticipated permanent shock to sectoral
  productivity and trace relative wages" disciplines every ingredient choice
  that follows.
- An ingredient earns its place only by serving the mechanism or the
  experiment. When tempted to add one, ask: which result changes if this is
  left out? If the answer is "none, but it's more realistic," leave it out and
  note it under Open Questions.

### 2. The two-model architecture

The dominant paper structure today: a **minimal analytical model** that
exposes the mechanism transparently (often solvable by hand, or in a
two-period / two-type version), followed by a **quantitative model** that
takes the mechanism to data. A sketch's job is the first of these, built so
the second is visible from it. So:

- Prefer the special case with closed-form intuition (log utility, Cobb–
  Douglas, two periods, two types) as the *first* pass even when the target is
  richer, and record which generalizations the quantitative version will need.
- When heterogeneity is on the table, climb the ladder deliberately:
  representative agent → two agents/types (TANK-style) → full distribution
  (HANK-style). Each rung is a diagnostic for the next — if the two-type
  version already delivers the mechanism, that is a finding worth recording.

### 3. Sufficient statistics and micro-moment discipline

The field's connective tissue between model and data is a small set of
estimable objects: MPCs and intertemporal MPCs, elasticities (Frisch, trade,
substitution), pass-throughs, Jacobians of aggregates with respect to price
paths. Two habits follow, and both belong in a sketch:

- **Every parameter gets an identifying moment**, noted in one line next to
  its introduction, even in a sketch: "θ (Calvo): slope of the Phillips curve /
  micro price-change frequency." If no moment can be named, that is a red flag
  about the parameter, not a formality skipped.
- Where possible, **state results in terms of estimable objects** rather than
  deep parameters — "the response is governed by the sectoral labor supply
  elasticity" travels; "governed by ψ" doesn't.

(The identification-first habit follows Nakamura & Steinsson's program; the
sufficient-statistics framing of heterogeneous-agent responses follows
Auclert, Rognlie & Straub.)

### 4. Solution-aware modeling: think in sequence space

Since Auclert, Bardóczy, Rognlie & Straub (Econometrica 2021), the standard
way to solve and estimate models with (or without) heterogeneity is the
sequence-space Jacobian method: the model is a set of **blocks** mapping
aggregate sequences to aggregate sequences, composed along a DAG, linearized
around a steady state, with MIT shocks / perfect-foresight transitions as the
default experiment. Even for a pen-and-paper sketch this has consequences:

- Write the model so its block structure is visible: which equations form the
  household block, the firm block, the market-clearing conditions. The
  equilibrium definition should read like a wiring diagram.
- A computable **steady state is a first-class deliverable**, not an
  afterthought — the whole solution method lives around it.
- Know the state variables and their dimension. If the sketch quietly implies
  a distribution as a state, say so explicitly and note how the quantitative
  version would handle it (SSJ toolkit in Python; continuous-time/master-
  equation methods are the alternative frontier).
- Default dynamic experiment: unanticipated shock at t=0, perfect foresight
  after, convergence back to steady state. Departures (anticipated shocks,
  aggregate risk, nonlinearities) are deliberate choices to flag.

### 5. Modeling conventions currently favored

Field-tested defaults; deviate knowingly, not accidentally.

- **Nominal rigidity in HA models: sticky wages over sticky prices.** Sticky
  prices with flexible wages make profits implausibly countercyclical after
  demand shocks, and with heterogeneous agents the profit distribution drives
  spurious results (Broer–Hansen–Krusell–Öberg; Auclert–Bardóczy–Rognlie).
  With a representative agent the choice matters less.
- **Preferences consistent with the experiment's horizon**: balanced-growth-
  compatible (KPR/log) preferences for anything long-run; GHH only when
  killing the wealth effect on labor supply is the *point*, and say so.
- **Decompose responses into direct and indirect (GE) effects** — the
  standard way to expose a transmission mechanism (partial-equilibrium
  response holding prices fixed vs. the general-equilibrium feedback).
- **Ablation mindset**: the model should nest a known benchmark (RANK inside
  HANK, frictionless inside Calvo, autarky inside trade) so each ingredient's
  contribution can be shown by switching it off. Record in the sketch which
  parameter settings recover the nested model.
- **Normalizations stated, not implied**: numeraire, units of each good,
  what's exogenous. Half of all sketch bugs live here.

## Part 2 — Classic craft (supporting)

- **Varian**: work a concrete example before the general case; simplify until
  the model is as simple as possible, *then* generalize; go to the literature
  after you've tried building it yourself; stop when the point is made.
  (In this skill, base papers are chosen up front — but the spirit survives:
  attempt each block before mining the base paper for its solution.)
- **Krugman**: question the question; dare to be silly — implausibly stark
  assumptions are how mechanisms become visible; simplify, simplify.
- **Rodrik**: a model is one map among many, fit for a purpose. Label each
  substantive modelling choice **critical** (the mechanism dies without it) or
  **convenience** (tractability only). Regularity conditions are never
  labeled.
- **Rubinstein**: a sketch is a fable. Be honest — in the Open Questions
  section — about what it demonstrates versus what it merely suggests.
- **Thomson** (writing theory): notation is a design decision — mnemonic
  letters, no symbol doing double duty, definitions before use, state results
  precisely. The notation table in the template is load-bearing.
- **Cochrane** (writing): strip generality that isn't earning its keep; if a
  result survives log utility, present it with log utility.

### Macro practice (researched 2026-11-02)

How macroeconomists work, as opposed to how the finished text reads. Thin:
most macro sources show only the order of presentation (marked E).

- **Small complete model, then one change at a time.** Chari & Kehoe:
  "Modern macroeconomists generally start with a model with a single type of
  agent and then enrich it"; Solow starts big and trims; the order matters
  little if both end at the same small model.
  [SR 399](https://www.minneapolisfed.org/research/sr/sr399.pdf). No source
  advises perfecting one block before the next.
- **Extend a well-tested core.** Kydland & Prescott: "use a well-tested
  theory" ([JEP 1996](https://pubs.aeaweb.org/doi/pdf/10.1257/jep.10.1.69));
  Blanchard: a "largely agreed upon common core", no "ad-hoc additions and
  repairs" ([PIIE 2017](https://www.piie.com/blogs/realtime-economic-issues-watch/need-least-five-classes-macro-models)).
  What to re-derive: no source says; "only what the extension changes" is
  our inference.
- **Agents first, market closure later** (E). Rogerson, Shimer & Wright solve
  the searcher's problem "taking market conditions as given", hold λ constant
  "for now", and endogenize later
  ([NBER WP 10655](https://www.nber.org/papers/w10655.pdf)).
- **Regularity conditions in one line.** The same survey: "It is standard to
  assume…", "It is also convenient to assume…", where needed. Krugman left
  "loose ends hanging" and warns against "a taxonomy of possible outcomes"
  ([How I Work](https://web.mit.edu/krugman/www/howiwork.html)). No source
  found says to settle them first.

## Part 3 — Sketch pre-flight checklist

Run before declaring a sketch done; record failures under Open Questions
rather than papering over them.

1. **Closure**: count equations and unknowns; identify the redundant equation
   via Walras's law. If the count doesn't work, the model isn't closed.
2. **Units and stationarity**: every equation dimensionally consistent;
   growing variables detrended or the balanced growth path stated.
3. **Nesting**: some parameter limit recovers a known model — name it and the
   limit.
4. **Steady state**: exists, and the computation strategy is clear (what's
   analytic, what's a root-finding problem in which variable).
5. **Mechanism sign check**: comparative statics of the key mechanism go the
   right way in a special case you can solve by hand.
6. **Assumption labels**: every substantive modelling choice tagged critical
   or convenience (regularity conditions are not).
7. **Moments**: every parameter has its identifying moment noted.
8. **Experiment**: stated, runnable in principle, and the expected mechanics
   written down before any computation.
