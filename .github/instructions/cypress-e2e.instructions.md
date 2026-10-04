---
applyTo: "cypress/e2e/**/*.ts"
---
# Cypress end-to-end tests

- Keep specs focused on user behavior and expected outcomes. Put selectors, actions, and page-specific assertions in
  `cypress/pages/`.
- Follow the current Page Object API: actions use verbs such as `openCategory()` and assertions use `should...` names
  such as `shouldBeVisible()` and `shouldHaveTitle()`.
- For an application controlled by the team, prefer stable `data-*` attributes and accessible labels. For the external
  Books to Scrape site, use only selectors verified against the real DOM, such as meaningful attributes, semantic HTML,
  or narrowly scoped structural classes. Never invent a `data-*` attribute that does not exist.
- Do not use XPath, positional indexes, or classes that only describe visual styling. A verified semantic class is allowed
  when the external application cannot be changed and no stronger selector exists.
- Use Cypress retryable assertions. Do not use `cy.wait(number)`, `sleep`, arbitrary polling, or timeout increases as
  synchronization.
- Synchronize on a concrete DOM condition, URL, application state, or an intercepted request.
- Keep each test independent. Reset navigation and mutable state in `beforeEach` or an approved fixture.
- Keep test data in `cypress/consts/` or fixtures, not duplicated across specs.
- Assert concrete values and business outcomes for content and behavior tests. Dedicated visibility or non-empty methods
  are allowed when visibility or presence is the behavior being tested, but they should be supplemented with value
  assertions when the requirement includes a meaningful value.
- Use `cy.intercept` only to observe or control a network boundary required by the scenario. Do not mock the behavior
  under test.
- Run targeted specs with `npm run demo:run -- --headless --spec <path>` and the full suite with
  `npm run demo:run -- --headless`.
- Do not add secrets, real personal data, or environment-specific URLs to test code.
