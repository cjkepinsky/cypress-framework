---
description: "[Group A] Create or repair a Cypress UI test using the repository conventions"
agent: agent
---
Create or repair a Cypress end-to-end test for this scenario: ${input:scenario}.

- Before editing, state the preconditions, UI steps, concrete expected results, test data, and files that will change.
- Read the applicable `.github/instructions/` file, relevant Page Objects, specs, Cypress configuration, and README
  before writing code.
- Reuse existing Page Objects and constants. Add selectors and assertions to the Page Object, not directly to the spec,
  unless the repository convention requires otherwise.
- Run `npm run check` and `npm run demo:run -- --headless --spec <file>`.
- If the public demo site behavior conflicts with the requested expectation, do not silently change the expectation.
  Report the discrepancy and identify the evidence needed to decide whether the test or the environment is wrong.
