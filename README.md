# Requirements
- Nodejs 18.x
- npm
- git

# Installation
```bash
git clone https://github.com/cjkepinsky/cypress-framework.git
cd cypress-framework
npm install
```

# Running Tests
```bash
npm run cypress:open
npm run cypress:run
```

# Problems to solve

## Captcha
from time to time captcha appears and automation fails. This could be resolved by using API, however didn't solve it yet fully.
See `helpers/ApiHelper.login()`.

## Scrolling issues
after clicking on `Create Contact` link the form is scrolled down and the scroll behavior becomes locked in this position.

## Selecting from top submenu
Selecting options by hovering on top menu and then clicking submenu option doesn't always work as expected. More time for investigation is needed.

## Tests flakiness
Tests will randomly fail due to the above issues.

# Further Improvements

## Handling uncaught exceptions

ask Developers to resolve exceptions appearing in the console, then remove
`Cypress.on('uncaught:exception', () => false)` from scenarios.
