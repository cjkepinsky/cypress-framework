# Cypress Framework Demo

A small Cypress framework demonstrating UI test automation with Cypress and TypeScript.

The demo suite runs against [Books to Scrape](https://books.toscrape.com/), a public test website that does not require
authentication. The scenarios cover storefront visibility, category navigation, pagination, and product details.

## Project structure

```text
.
├── cypress/
│   ├── config/        # shared and demo-specific Cypress configuration
│   ├── consts/        # test data and expected UI labels
│   ├── e2e/           # end-to-end test scenarios
│   ├── pages/         # Page Object Model classes
│   └── support/       # Cypress support entry point
├── .github/workflows/ # GitHub Actions pipeline
├── .gitlab-ci.yml     # GitLab CI pipeline
├── Dockerfile         # Cypress Docker runner
├── Jenkinsfile        # Jenkins pipeline
├── cypress.config.ts  # active Cypress configuration entry point
├── package.json       # scripts and dependencies
└── tsconfig.json      # TypeScript configuration
```

## Configuration and CI files

`package.json` defines project metadata, dependencies, quality checks, test commands, and report generation.

`cypress.config.ts` is the active Cypress entry point. It loads `cypress/config/demo.config.ts`, which extends the
shared configuration from `cypress/config/base.config.ts`.

`.env.demo` contains the public demo `BASE_URL`. `.env.example` is a template for local configuration. `.env.local` is
ignored by Git and must not contain committed secrets.

`tsconfig.json` configures TypeScript, JSON imports, and path aliases. `.eslintrc.js` configures ESLint for JavaScript,
TypeScript, and Cypress files.

`commitlint.config.js`, `.githooks/pre-commit`, and `.githooks/commit-msg` enforce code style and Conventional Commits
locally.

`Dockerfile` uses `cypress/included:15.15.0`, installs the locked dependencies, and runs the demo suite. `Jenkinsfile`
and `.gitlab-ci.yml` run quality checks, Cypress tests, report generation, and artifact archiving. The
`.github/workflows/cypress.yml` workflow runs quality checks and Cypress tests for pushes and pull requests and uploads
reports, videos, and screenshots.

## Requirements

- Node.js `^20.1.0`, `^22.0.0`, or `>=24.0.0` (Node.js 22 is recommended)
- npm
- git

Cypress `15.15.0` is installed from `package-lock.json` during `npm ci`.

## Installation

```bash
git clone https://github.com/cjkepinsky/cypress-framework.git
cd cypress-framework
npm ci
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
chmod +x .githooks/commit-msg
```

The demo commands use the committed public `.env.demo` configuration. To create a separate local configuration, copy
`.env.example` to `.env.local`; do not commit the local file.

## Available commands

```bash
# Run ESLint and TypeScript checks
npm run check

# Open Cypress in interactive mode
npm run demo:open

# Run all E2E tests in headless mode
npm run demo:run

# Explicitly pass the headless flag
npm run demo:run -- --headless

# Remove generated reports
npm run clean:reports

# Merge JSON results and generate an HTML report
npm run generate-report
```

`npm run demo:run` clears old Mochawesome results before starting a new run. The report command expects a completed
Cypress run and writes the HTML report to `cypress/reports/html/output.html`.

## Architecture and patterns

### Page Object Model

Page-specific selectors, actions, and assertions are encapsulated in page classes, while spec files focus on user
scenarios and expected outcomes.

- `HomePage` contains catalog actions and assertions.
- `ProductDetailsPage` contains product details assertions.
- Spec files use readable, chainable methods instead of low-level selectors.

Actions use names such as `openCategory()` and `goToNextPage()`. Cypress assertions use names beginning with `should...`,
such as `shouldBeVisible()` and `shouldHaveTitle()`. Assertion methods enqueue retryable Cypress assertions and return
the current page object.

Methods that navigate to a different page return the target page object:

```ts
import booksCatalog from "consts/booksCatalog.json";

const productDetailsPage = new HomePage()
  .openPage()
  .openBookDetails(booksCatalog.books.tippingTheVelvet);

productDetailsPage
  .shouldBeVisible()
  .shouldHaveTitle(booksCatalog.books.tippingTheVelvet);
```

### Base page abstraction

Shared page behavior is placed in `BasePage`. It provides common visibility, header, breadcrumb, and navigation methods
without introducing fixed waits. Synchronization relies on Cypress retryable assertions and application state.

### Test data separation

Reusable test data and static UI labels are stored in `cypress/consts/booksCatalog.json`. This keeps product names,
category names, pagination labels, availability messages, and product information labels out of the spec files.

### TypeScript

TypeScript provides editor support, typed page object contracts, JSON imports, and compile-time feedback. The Cypress
Webpack preprocessor uses `transpileOnly` for fast spec bundling, so `npm run typecheck` remains an explicit quality gate.

## Environment configuration

The environment name is read from `NODE_ENV`. The base configuration loads `.env.<NODE_ENV>` when that file exists and
validates the resulting `BASE_URL`.

`BASE_URL` is resolved with the following precedence:

1. `BASE_URL` from the process environment
2. `BASE_URL` from `.env.<NODE_ENV>`
3. the demo fallback URL from `cypress/config/demo.config.ts`

The demo scripts set `NODE_ENV=demo` using `cross-env`, so the commands work consistently across Unix and Windows
shells. `allowCypressEnv` is disabled; environment values are handled by the Node-side Cypress configuration instead of
being exposed through browser code.

## Reporting and artifacts

Mochawesome creates one JSON result per spec. `npm run generate-report` merges these results and uses `marge` to create
`cypress/reports/html/output.html`.

Cypress videos are enabled for every run and screenshots are captured on failure. Reports, videos, screenshots, and
downloads are ignored by Git. CI pipelines archive the available reports and media artifacts.

## Current test coverage

The suite contains four specs and five tests covering:

- storefront visibility and known books on the home page
- category navigation and category contents
- catalog pagination
- product details, availability, description, price, and product information labels

## Further improvements

- add Commitlint checks for all commits in CI pipelines
- add tests for filtering, sorting-like navigation, and negative assertions
- run the suite against a controlled test environment in addition to the public demo site
