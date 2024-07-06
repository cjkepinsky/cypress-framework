import LoginPage from 'pages/loginPage';
import DashboardPage from 'pages/dashboardPage';
import { config } from 'config/config';

describe('Login Functionality', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('should login successfully with valid credentials', () => {
    loginPage
      .openPage()
      .typeUsername(config.credentials.username)
      .typePassword(config.credentials.password)
      .clickLoginBtn()

      dashboardPage.isVisible()
  });

  it('should display error message with invalid credentials', () => {
    loginPage
      .openPage()
      .typeUsername('invalid')
      .typePassword('invalid')
      .clickLoginBtn();

    cy.contains('Login failed - please check your username and password and try again.').should('be.visible');
  });
});