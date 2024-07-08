import config from "config/config"
import BasePage from "pages/basePage";

export default class LoginPage extends BasePage {
  private readonly usernameInput = '#login_user';
  private readonly passwordInput = '#login_pass';
  private readonly loginButton = '#login_button';
  private readonly languageSelect = 'select#login_lang';
  private readonly themeSelect = 'select#login_theme';
  private readonly loginError = 'span#login-error';
  protected container = "body.login.with-form"

  openPage() {
    super.openPage(config.baseUrl)

    return this;
  }

  typeUsername(username: string) {
    cy.get(this.usernameInput).type(username);

    return this;
  }

  isUsernameInputVisible() {
    cy.get(this.usernameInput).should('be.visible')

    return this;
  }

  typePassword(password: string) {
    cy.get(this.passwordInput).type(password);

    return this;
  }

  isPasswordInputVisible() {
    cy.get(this.passwordInput).should('be.visible')

    return this;
  }

  clickLoginBtn() {
    cy.get(this.loginButton).click();

    return this
  }

  isLoginBtnVisible() {
    cy.get(this.loginButton).should('be.visible')

    return this;
  }

  isLanguageSelectorVisible() {
    cy.get(this.languageSelect).should('be.visible')

    return this;
  }

  isThemeSelectorVisible() {
    cy.get(this.themeSelect).should('be.visible')

    return this;
  }

  isLoginErrorVisible(errorMsg: string) {
    cy.get(this.loginError)
      .should('be.visible')
      .and('contain', errorMsg)

    return this;
  }
}