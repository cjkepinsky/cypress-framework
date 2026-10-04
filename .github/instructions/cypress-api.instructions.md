---
applyTo: "cypress/api/**/*.ts"
---
# Cypress API tests

## Status

This is a future scope. The current repository has no `cypress/api/` directory, API client, API contract, or API-test
runner convention.

- This repository currently contains UI specs and has no established API client or API-test directory. Do not invent
  one or add dependencies without explicit approval.
- When API testing is requested, use `cy.request` for direct API behavior and `cy.intercept` only for UI network-boundary
  tests.
- Keep the base URL, credentials, and tokens in approved environment or Node-side configuration. Do not expose secrets
  through browser-readable values or commit them to fixtures.
- Assert the HTTP status, relevant headers, response body fields, error payload, and resulting resource state. A status
  code alone is insufficient for a meaningful test.
- Cover valid input, missing and invalid fields, boundary values, authentication and authorization failures, not-found
  resources, conflicts, idempotency, and cleanup when those behaviors are part of the contract.
- Create isolated data for each test and clean it up through an approved test API or task. Do not depend on execution
  order or shared mutable fixtures.
- Validate response shapes against an existing project schema mechanism when one exists. Do not add a schema library
  without approval.
- Run API specs twice and, when relevant, in reverse order to detect state leakage.
- If no API contract or approved test environment is available, state that explicitly instead of guessing endpoints.
