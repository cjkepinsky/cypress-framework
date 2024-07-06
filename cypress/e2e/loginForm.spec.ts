import LoginPage from 'pages/loginPage';
import HomePage from 'pages/homePage';
import { config } from 'config/config';

describe('Login Functionality', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new HomePage();

  it('login form should be visible', () => {
    loginPage
      .openPage()

      .isPageVisible()
      .isUsernameInputVisible()
      .isPasswordInputVisible()
      .isLanguageSelectorVisible()
      .isThemeSelectorVisible()
      .isLoginBtnVisible()
  });


  it('should login successfully with valid credentials', () => {
    loginPage
      .openPage()
      .typeUsername(config.credentials.username)
      .typePassword(config.credentials.password)
      .clickLoginBtn()

      dashboardPage.isPageVisible()
  });
});