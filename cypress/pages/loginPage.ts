import DashboardPage from "pages/dashboardPage";

export default class LoginPage {
  private readonly usernameInput = '#login_user';
  private readonly passwordInput = '#login_pass';
  private readonly loginButton = '#login_button';

  openPage() {
    cy.visit(Cypress.env('baseUrl'));
    return this;
  }

  typeUsername(username: string) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  fillPassword(password: string) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  submit() {
    cy.get(this.loginButton).click();

    return this
  }
}