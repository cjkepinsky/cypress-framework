# Requirements

- Nodejs 18.12.0
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

ask Developers to resolve exceptions appearing in the console, then remove
`Cypress.on('uncaught:exception', () => false)` from `support/e2e.ts`.
