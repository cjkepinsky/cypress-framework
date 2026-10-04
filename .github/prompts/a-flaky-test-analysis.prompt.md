---
description: "[Group A] Diagnose and repair a flaky Cypress test using reproduction evidence"
agent: agent
---
The Cypress test `${input:test:spec path or test name}` is failing intermittently.

1. Read the spec, Page Objects, fixtures, support code, configuration, and recent relevant history.
2. Reproduce it alone, then run it 5 to 10 times in headless mode with retries disabled for measurement. Use
   `npm run demo:run -- --headless --config retries=0 --spec <file>` or an equivalent loop and report both the
   individual-attempt and command-level pass/fail rates.
3. List at least three root-cause hypotheses, ordered by likelihood. Consider synchronization, selectors, data, state
   leakage, external-site behavior, browser differences, and real product regressions.
4. Propose and perform the smallest evidence-gathering experiment that can distinguish the leading hypotheses.
5. Repair the test only when the evidence identifies a test-side cause. Use DOM, URL, application-state, or request
   conditions. Do not add fixed waits, increase timeouts without evidence, commit a retry change, skip the test, or
   weaken assertions. A retry override is allowed only for diagnosis and must not remain in the repository.
6. Run the repaired test at least 10 times when the environment permits, then run the nearby specs and `npm run check`.
7. If the evidence points to the public site or a product defect, report it instead of changing the expected behavior.
