# Cypress Framework Demo

A simple Cypress framework demonstrating various practices and design patterns. This project is intended for educational
purposes and showcases automated testing with Cypress. It also provides some example configuration files including:
Typescript,
Webpack, ESLint, CommitLint, Jenkins, Gitlab, Docker.

# Configuration Files

`package.json`
Defines project metadata, dependencies, scripts, and other npm-related configurations.

`config/config.ts`
Main project config file

`cypress.config.ts`
Main Cypress configuration file, linked to `cypress/config/demo.config.ts`, which inherits basic Cypress configuration
from `cypress/config/base.config.ts`. The latter file takes some basic setting from `.env.*` files.

`.env.demo` and `env.local` - placed for demonstration purposes only, contain some environmental variables, in this case
BaseURL, login and password

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

# Problems to solve

### Captcha

from time to time captcha appears and automation fails. This could be potentially resolved by using API, however didn't
make it working yet fully.
See `helpers/ApiHelper.login()`, usage examples:

```typescript
ApiHelper.loginAndSetCookie({
  username: config.credentials.username,
  password: config.credentials.password
}).then((loginResponse) => {
  cy.log('Login response in test:', JSON.stringify(loginResponse));

  if (!loginResponse || !loginResponse.body) {
    throw new Error('Login response or body is undefined');
  }
})
```

### Scrolling issues

after clicking on `Create Contact` link (and others) the form is scrolled down and the scroll behavior becomes locked in
this
position while the teast is running.

### Selecting from top submenu

Selecting options by hovering on top menu and then clicking submenu option doesn't always work as expected. More time
for investigation is needed.

### Tests flakiness

Tests will randomly fail due to the above issues.

# Further Improvements

### Handling uncaught exceptions

ask 1CRM Developers to resolve exceptions appearing in the console, then remove
`Cypress.on('uncaught:exception', () => false)` from `support/e2e.ts`.
