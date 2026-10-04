---
applyTo: "cypress/unit/**/*.ts"
---
# Unit and helper tests

## Status

This is a future scope. The current repository has no `cypress/unit/` directory, unit-test runner, or unit-test script.

- This repository does not currently define a unit-test runner or a `test:unit` script. Do not create unit tests or add a
  unit-test dependency without explicit approval.
- If a unit-test runner is approved, keep unit tests free of Cypress browser commands, HTTP calls, and database access.
  Test pure helpers, data transformations, and deterministic logic in isolation.
- Use the same TypeScript strictness and naming conventions as the repository.
- Cover meaningful inputs, boundary values, invalid values, and invariants. Avoid tests that only assert a value is
  defined or truthy.
- Keep fixtures and generated data local to the test. Do not share mutable state between cases.
- Add the runner command and CI integration only as part of the approved design; do not create a misleading
  `test:unit` command that is not executable.
