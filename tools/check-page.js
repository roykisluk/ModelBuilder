#!/usr/bin/env node
// The page's tutor input, links and text rendering, checked offline on made-up data: node tools/check-page.js
// It runs the parts of the page marked /* check:begin */ … /* check:end */ with a stub page state (S) and editor ($).
"use strict";
const fs = require("fs"), path = require("path"), assert = require("assert");
const page = fs.readFileSync(path.join(__dirname, "../skills/macro-model-builder/assets/model-builder.html"), "utf8");
const parts = [...page.matchAll(/\/\* check:begin \*\/([\s\S]*?)\/\* check:end \*\//g)].map((m) => m[1]);
assert(parts.length, "the page has no /* check:begin */ … /* check:end */ blocks");

function load(ref, tex = "") {
  const S = { ref: { text: "", pdfAssetId: "", title: "", ...ref }, status: {}, handoff: "", progress: "",
    chat: [{ role: "user", content: "Where do I start?" }] };
  const $ = () => ({ value: tex });
  return new Function("S", "$", parts.join("\n") + "\nreturn { buildInput, handoffAsk, linkRe, isDraftRef, readerHref, textMacros, esc };")(S, $);
}
const input = (p) => p.buildInput()[0].content;
const links = (p, s) => [...s.matchAll(p.linkRe())].map((m) => m[0]);

// 1. No learner, rules or brief stored: the generic rules, "the learner", no placeholder left over
{
  const p = load({});
  const t = input(p);
  assert(t.includes("ask the learner what model they are building"), "no-brief fallback");
  assert(t.includes("in the learner's sketch"), "learner default outside the rules");
  assert(!t.includes("{{"), "a placeholder was left in the tutor input");
  const q = input(load({ learner: "Ada", brief: "b" }));
  assert(q.includes("The project: b") && q.includes("Reply to Ada's last message"), "learner and brief filled in");
  assert(p.handoffAsk().includes("[Not from the learner:"), "handoff request uses the learner");
}
// 2. Stored rules replace the page's rules whole; a brief full of $ reaches the tutor unchanged
{
  const brief = "cost $c$ and $$x=1$$ and $& $1 $'";
  const t = input(load({ rules: "R {{brief}} | {{order}}", brief, order: "A → B" }));
  assert(t.startsWith(`R ${brief} | A → B`), "stored rules with brief and order filled in, $ intact");
  assert(!t.includes("Pace (this comes first"), "the generic rules are still in the input");
}
// 3. Draft links come from the stored short name, escaped; none without one
{
  assert.deepStrictEqual(links(load({ short: "D2" }), "(D2.13) and (Q9.13)"), ["(D2.13)"]);
  assert.deepStrictEqual(links(load({ short: "a.b" }), "(aXb.1) and (a.b.1)"), ["(a.b.1)"]);
  assert.deepStrictEqual(links(load({}), "(D2.13) and eq. (3)"), ["eq. (3)"]);
  assert(load({ short: "D2" }).isDraftRef("D2.13") && !load({ short: "D2" }).isDraftRef("eq:x"), "isDraftRef with short");
  assert(!load({}).isDraftRef("D2.13"), "isDraftRef without short");
}
// 4. Stored macros render as escaped text, with a class only when it is a plain name
{
  const p = load({ macros: { mm: { tex: "M #1: #2", class: "mom" }, cc: { tex: "(C.#1)" } } });
  assert.strictEqual(p.textMacros(p.esc("\\mm{x}{<y>} \\cc{4}")), '<span class="mom">M x: &lt;y&gt;</span> (C.4)');
  const q = load({ macros: { mm: { tex: "<b>#1</b>", class: 'x" onload="' } } });
  const out = q.textMacros(q.esc("\\mm{x}"));
  assert(!out.includes("onload") && !out.includes("<b>"), "macro output must not carry markup: " + out);
}
// 5. The reader link takes only a claude.ai page
{
  const p = load({});
  assert.strictEqual(p.readerHref({ reader: "javascript:alert(1)" }), null);
  assert.strictEqual(p.readerHref({}), null);
  assert.strictEqual(p.readerHref({ reader: "https://claude.ai/artifact/abc" }), "https://claude.ai/artifact/abc");
}
console.log("check-page: ok");
