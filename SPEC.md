# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

## Current stage

- Stage: BRAND-001 kept and merged; fictional demo published and verified.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Role-play learner approved the coherent result after CI. PR #2 merged into main as f3a5487; [main check/publish run](https://github.com/kaw393939/is117-coached-full-1026/actions/runs/40272223895) succeeded.
- Next small decision: Agree a narrow scope for the optional size-help idea below; no follow-up has been built. Issue: https://github.com/kaw393939/is117-coached-full-1026/issues/1 ; branch: feat/1-brand-studio.

## Product boundary

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales.

## Audience hypotheses

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                 | Secondary audience                                       |
| ------------------------------------- | ------------------------------------------------ | -------------------------------------------------------- |
| Person in a concrete situation        | Student going from class to friends              | Tee wearer layering under a colorful jacket              |
| Goal or meaning they seek             | Casual but put together                          | A quiet base for their own outfit                        |
| Concern before choosing               | Generic identity                                 | Page or logo clashes with their jacket                   |
| What the page should help them decide | Whether this identity fits casual social plans   | Whether it leaves room for personal styling              |
| Evidence or assumption                | Assumption; role-play learner supplied situation | Assumption; coach proposed and role-play learner adopted |

## Early brand brief

| Decision                                 | Agreement                                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------------- |
| Brand name                               | Side Street — fictional classroom brand, no trademark clearance                        |
| One-sentence promise                     | A simple base for small discoveries with friends (coach proposal adopted)              |
| Primary archetype: the brand's character | Explorer: new cafés with friends, not big adventures (learner qualified)               |
| Three voice traits                       | Curious, casual, welcoming (coach proposal adopted)                                    |
| One example line in this voice           | Take the side street. / A white tee for plans you find along the way.                  |
| Learner's predicted audience effect      | Copy feels casual and suggests heading out without a whole plan; role-play hypothesis. |

## Visual decision

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Shared headline / support / action                | Take the side street. / A white tee for plans you find along the way. / Add to demo bag                                                                                                                |
| Modernist preview, reference, and annotations     | public/explorations/modernist.html; Kauffer drawing1934,V&A E.3770-2004; segmented geometry/diagonal pale field actually inspected. https://www.vam.ac.uk/articles/what-was-modernism                  |
| Postmodernist preview, reference, and annotations | public/explorations/postmodernist.html; Bedin Super lamp prototype1981,V&A M.1-2011; semicircle/wheels/colored radial holders actually inspected. https://www.vam.ac.uk/articles/what-is-postmodernism |
| Chosen direction and reason                       | A. Learner found bold phone headline easier to read and casual/put together; B too fancy. Role-play preference, not audience research.                                                                 |
| Original SVG logo                                 | Original Side Street wordmark and turn cue, assets/wordmark.svg (the kept original proposal).                                                                                                          |
| Monochrome and small-size variants                | Single explicit ink #213b32, no filter. Actual156/140/112px presentations at public/logo-study.html; all readable to role-play learner.                                                                |
| Logo review at actual use size                    | Learner kept the readable smallest row and secondary turn cue. Actual nav156px desktop/140px phone; no rejection or mandatory minimum invented.                                                        |
| Shared palette, typography, spacing, and assets   | A: paper #f5f1e8, ink #213b32, soft #e5e6da, accent #efd08c; Arial/Helvetica/sans-serif, shared tokens, type/action classes and SVG.                                                                   |

## Ethical persuasion

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle   | Actual copy or interaction                                       | Visitor benefit / factual support                                                                                     |
| ----------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Reciprocity | Free jeans + open-overshirt pairing tip, below purchase controls | Learner supplied the example to help picture after-class use. Freely available; no signup or product/material claims. |
| Liking      | Familiar class-to-café voice and welcoming small-discovery story | Based on the agreed situation, not invented customer community/reviews. Intended effect remains a hypothesis.         |

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                                                                                                                           | Issue / PR                                                                                                                                                                                                                                                                                                                                                                                                           | Actual checks and observations                                                                                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | [Storefront](public/index.html), [shared CSS](public/styles.css), [live guide](public/styleguide.html), [studies](public/explorations/index.html), [original SVG](public/assets/wordmark.svg), [browser contracts](tests/browser/brand.spec.js) | [Issue #1 / delivery record](https://github.com/kaw393939/is117-coached-full-1026/issues/1); [PR #2](https://github.com/kaw393939/is117-coached-full-1026/pull/2), [feature CI](https://github.com/kaw393939/is117-coached-full-1026/actions/runs/40272100951); [successful main check/publish](https://github.com/kaw393939/is117-coached-full-1026/actions/runs/40272223895); latest delivery recorded in issue #1 | `npm run check`: formatting/lint, 7 server + 13 Chromium passed. Shared computed headline/support/action styles match at 1280/375px; nav logo 156/140px. [LEARNING](LEARNING.md) distinguishes role-play impressions from actual tool results. |

The coach inspected all three pages at desktop/phone widths, links, claims, shared identity and logo. No horizontal overflow or unloaded images appeared. Computer Use Tab/Enter actually added M and displayed count 1. The isolated learner agent could not access IAB; it inspected the real keyboard capture and phone renders instead. Its own keyboard/touch operation is **not observed**. These are prototype checks and simulated preferences, not audience validation or complete accessibility proof.

## Later

Learner requested a Size help link above the size choices that reveals how to measure an existing shirt. After the coach pointed out the missing product data, learner specified no invented size chart or fit promise: actual garment measurements would be needed for comparison. This is a proposed next cycle, not implemented; agree its bounded scope and next spec ID before editing.
