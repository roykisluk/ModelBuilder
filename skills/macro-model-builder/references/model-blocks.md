# The default block map

The default order for building a model, with what "settled" means per block
and the traps that usually bite. This is a map, not a rail: follow the
economics, compress for small models, and jump ahead when a later block is
where the model's identity gets decided (e.g., the equilibrium concept in
search models). Whatever the order of *discussion*, the `.tex` keeps this
order of *presentation* — readers expect it.

## 0. Purpose header

One short paragraph in the `.tex`: the question, the mechanism, the
experiment. Settled when the user can state all three in one breath. Everything
downstream is checked against this paragraph.

## 1. Environment

Time (discrete/continuous, horizon), demography (who exists, measure,
lifespan), goods and their tradability, technology at a glance, information
and uncertainty, **timing within a period**. Settled when a stranger could
list every object in the economy without seeing an equation.

Traps: timing conventions (is capital chosen at t productive at t or t+1? is
the wage set before or after the shock is observed?) — write the within-period
timeline explicitly whenever there's any doubt; it prevents more downstream
bugs than any other sentence in the sketch.

## 2. Agents and preferences

Each agent type: objective, horizon, discounting, what they choose, what they
take as given. Settled when every choice variable has an owner and every
agent's objective is written.

Traps: preferences inconsistent with balanced growth when the experiment is
long-run; heterogeneity introduced in preferences when it belongs in
constraints (or vice versa) — put heterogeneity where the mechanism needs it
and nowhere else.

## 3. Technology and market structure

Production functions, market structure per market (competitive, monopolistic,
matching/search, bargaining), who sets which price, returns to scale. Settled
when every price in the model has a known origin: taken parametrically, set by
an optimizer, or determined by a protocol (bargaining, matching).

Traps: an unpriced good or an unowned profit; implicit constant returns doing
silent work; forgetting who receives which income flow (profits, rents) —
income accounting errors surface later as a Walras's-law failure.

## 4. Frictions

Added one at a time, and only after the frictionless version of the relevant
block works — the friction's contribution is the *difference* between the two
versions, and that difference is usually the paper. Each friction gets its
critical/convenience label immediately.

Traps: two frictions introduced at once (their effects can't be told apart);
a friction whose removal is not well-defined (then it can't be ablated).

## 5. Agents' problems and first-order conditions

Each agent's problem stated formally (sequence or recursive form — choose per
what the solution method will want, and be consistent), then FOCs and, where
relevant, envelope conditions. Settled when every FOC has an economic reading
The user can say in words.

Traps: constraints that can bind treated as always-slack (or the reverse);
missing transversality; deriving FOCs against the stated timing. In teaching
modes, this block is where the user should be holding the pen most.

## 6. Aggregation and market clearing

Aggregate each condition across agents; state every market-clearing condition;
derive the resource constraint and check it against the income accounting from
block 3. With heterogeneous agents: state exactly which statistic(s) of the
distribution enter aggregates — that is the model's sufficient-statistic
structure showing itself.

Traps: silently assuming symmetric equilibrium before imposing it; a
distribution as hidden state variable; double-counting intermediate goods in
GDP.

## 7. Equilibrium definition

The formal definition: the list of objects (allocations, prices, value
functions, distributions), the conditions they jointly satisfy, and what is
exogenous. Settled when the definition mentions every object introduced above
and nothing that wasn't. This block reads like a wiring diagram of the model's
blocks — that structure is what a sequence-space solution will consume.

Traps: equilibrium objects that appeared in no prior block (a sure sign a
block is missing); the definition silently selecting among multiple
equilibria — if multiplicity is possible, say so under Open Questions.

## 8. Steady state / balanced growth path

The stationary version of every equilibrium condition; which equations pin
which variables; what reduces to a one-equation root-finding problem in which
unknown. Settled when the computation strategy could be handed to a script.

Traps: normalizations deferred until now that contradict earlier choices;
steady-state existence assumed where a parameter restriction is needed —
state the restriction.

## 9. The experiment

The shock or policy change, its stochastic structure (default: unanticipated
at t=0, perfect foresight after), the outcome variables, and — before any
computation — the expected mechanics written in words: which condition moves
first, what adjusts, what the sign should be. This paragraph is the sketch's
falsifiable prediction about itself.

## 10. Open questions / next steps

Honest and specific: unresolved modeling choices, checks not yet run,
generalizations the quantitative version needs, what the sketch demonstrates
versus merely suggests. This section is allowed to be long; it is the bridge
to the formal version.

## Compressing for small models

A two-period or static sketch: blocks 1–3 usually merge into one "Setup"
section, block 8 may be vacuous, and the notation table can go. Keep,
always, no matter how small: the purpose header, the equilibrium definition,
the experiment, and open questions. Those four are what make it a model
sketch rather than notes.
