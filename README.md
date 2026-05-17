# Cypress Framework Demo

A simple Cypress framework demonstrating UI test automation with Cypress and TypeScript.

The demo suite runs against [Books to Scrape](https://books.toscrape.com/), a public test website that does not require
authentication. The scenarios cover basic storefront checks such as home page visibility, category navigation,
pagination, and product details.

# Configuration Files

`package.json`
Defines project metadata, dependencies, scripts, and other npm-related configurations.

`cypress.config.ts`
Main Cypress configuration file, linked to `cypress/config/demo.config.ts`, which inherits basic Cypress configuration
from `cypress/config/base.config.ts`. The latter file takes some basic setting from `.env.*` files.

`.env.demo` - placed for demonstration purposes only, contains the public demo BaseURL.

`tsconfig.json`
TypeScript configuration file specifying compiler options, such as target version, module resolution, and paths.

`.eslintrc.json`
Configuration file for ESLint, specifying linting rules and settings for JavaScript/TypeScript files.

`commitlint.config.js`
Configuration file for commitlint, enforcing commit message conventions based on predefined rules.

`.githooks/pre-commit`
A custom Git hook script to run ESLint on staged files before commit.

`.githooks/commit-msg`
A custom Git hook script to run commitlint on commit messages.

`Dockerfile`
Defines the basic Docker image for the project, specifying the base image, environment variables, and steps to set up
and run
the application in a containerized environment.

`Jenkinsfile`
An example of pipeline script for Jenkins, defining the stages and steps for CI/CD processes, including building,
testing, and deploying the application.

`.gitlab-ci.yml`
A configuration file for GitLab CI/CD, defining the pipelines, jobs, and stages for automating the build, test, and
deployment processes in a GitLab environment.

`.github/workflows/cypress.yml` Basic example of Github Actions automatically running Cypress tests after the merge to
main branch.

# Requirements

- Nodejs 18.12.0
- npm
- git

# Installation

```bash
git clone https://github.com/cjkepinsky/cypress-framework.git
cd cypress-framework
npm install
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
chmod +x .githooks/commit-msg
```

# Running Tests

```bash
npm run demo:open
npm run demo:run
```

# Further Improvements

- add ESLint and CommitLint checks to Gitlab and Github configuration files
- add tests for filtering, sorting-like navigation, and negative assertions
- replace any fixed waits with route-based or DOM-state-based synchronization when the tested application requires it
