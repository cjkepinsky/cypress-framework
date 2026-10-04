# GitHub Copilot instructions for the Cypress framework

## Project

This repository is a small Cypress 15 and TypeScript end-to-end testing framework.

- The demo suite targets the public [Books to Scrape](https://books.toscrape.com/) website.
- The README is the source of truth for repository usage, commands, structure, and current coverage.
- Cypress configuration lives in `cypress.config.ts` and `cypress/config/`.
- Test data and expected labels live in `cypress/consts/`.
- Page Objects live in `cypress/pages/`.
- End-to-end scenarios live in `cypress/e2e/`.
- This repository does not contain the production application source code or a formal business-requirements document.

## Response rules

- Respond in English.
- When describing repository behavior, cite the relevant file and method or line when practical.
- If information is not present in the repository, say "I did not find this in the repository" instead of guessing.
- Do not treat the public demo site's current HTML as an application requirement without stating that limitation.
- Do not expose or invent credentials, tokens, personal data, or private URLs.
- Treat the applicable files in `.github/instructions/` as the canonical path-specific coding rules. Agents and prompts
  should reference those rules instead of redefining them.

## Cypress conventions

- Follow the Page Object Model and keep selectors, actions, and page-specific assertions in `cypress/pages/`.
- Preserve the current action and assertion naming conventions described by the applicable path-specific instructions.
- Synchronize on URL, DOM, application state, or an intercepted request. Do not add arbitrary `cy.wait(number)` or
  `sleep`.
- Keep tests independent and do not weaken or skip assertions to accommodate current behavior.
- Never commit secrets. `.env.local` is ignored; use approved environment variables or `.env.example`.

## Quality gates

Use the existing commands:

- `npm run check` for ESLint and TypeScript checking.
- `npm run demo:run -- --headless` for the complete Cypress suite.
- `npm run demo:run -- --headless --spec <path>` for a targeted spec.
- `npm run generate-report` after a Cypress run to create the Mochawesome HTML report.
