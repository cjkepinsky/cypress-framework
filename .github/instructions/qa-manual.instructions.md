---
applyTo: "docs/test-cases/**"
---
# Manual QA documentation

## Status

This repository does not currently contain `docs/test-cases/` or a formal manual-test template. These rules apply only
when that documentation scope is explicitly introduced.

- This repository has no formal requirements document or existing manual test-case template. Use acceptance criteria
  supplied by the user and the current README; do not invent product behavior.
- Each test case should use this format: ID, title, scope, preconditions, exact test data, executable steps, exact
  expected results, priority, risk rationale, and design technique.
- Use explicit values and visible outcomes. Avoid expected results such as "works correctly" or "is displayed" without
  stating what should be visible or changed.
- Apply suitable design techniques: equivalence partitioning, boundary values, decision tables, state transitions,
  pairwise testing, or error guessing. Name the technique used.
- Distinguish framework limitations, public-demo-site behavior, and suspected product defects.
- When a scenario can be automated with the current Cypress framework, identify the target spec and Page Object without
  writing code unless the user requests implementation.
- If a requirement conflicts with observed behavior, preserve the requirement, document the discrepancy, and include the
  evidence needed for a bug report.
