import { config } from "config/config"

export default class LoginPage {
  private readonly usernameInput = '#login_user';
  private readonly passwordInput = '#login_pass';
  private readonly loginButton = '#login_button';

  openPage() {
    cy.visit(config.baseUrl);
    return this;
  }

  typeUsername(username: string) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password: string) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLoginBtn() {
    cy.get(this.loginButton).click();

    return this
  }
}