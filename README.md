# Side Street — completed IS117 coaching simulation

This is a separate, completed branding prototype built from a fresh SSH clone. A separate agent played the learner; it is **instructor evaluation evidence**, not a student submission or proof of learning. BRAND-001 was kept after reviewed-head CI passed and PR #2 merged. The fictional demo is published and browser-verified.

**[Open the completed shop](https://kaw393939.github.io/is117-coached-full-1026/)** · [Live style guide](https://kaw393939.github.io/is117-coached-full-1026/styleguide.html)

**Starting the assignment?** Use the [unfinished IS117 template and its README](https://github.com/kaw393939/is117-brand-studio#readme). This repository preserves an example, not the student starting point.

## Inspect the work

- [SPEC.md](SPEC.md): audience hypotheses, brief, direction, persuasion, files and checks.
- [LEARNING.md](LEARNING.md): short AI-drafted contributions, assistance and observation limits.
- [Delivery record](https://github.com/kaw393939/is117-coached-full-1026/issues/1): actual PR, CI and publication links as they become available.
- Local pages: `/`, `/styleguide.html`, `/studio.html`, `/explorations/index.html`, `/logo-study.html`.

## Run this preserved example

Use the existing cloned project with Node 22.16+ on the 22 LTS line, or 24+. For a new clone, run `npm ci` first. Run `npm run dev` and open its printed URL. Saved files under `public/` automatically refresh the browser and clear the temporary bag. Leave that terminal running; Ctrl+C stops it. The bag does not take orders or payments.

For manual refresh, stop development mode, run `npm run preview` and reopen its printed URL. Run `npm run check` for formatting, lint, server and real Chromium checks. If Chromium is absent, run `npm run setup:browser` and retry. Local preview does not publish to GitHub Pages.
