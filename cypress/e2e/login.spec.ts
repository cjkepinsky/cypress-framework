import LoginPage from 'pages/loginPage';
import DashboardPage from 'pages/dashboardPage';

describe('Login Functionality', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('should login successfully with valid credentials', () => {
    loginPage
      .openPage()
      .typeUsername('admin')
      .fillPassword('admin')
      .submit()

      dashboardPage.isVisible()
  });

  it('should display error message with invalid credentials', () => {
    loginPage
      .openPage()
      .typeUsername('invalid')
      .fillPassword('invalid')
      .submit();

    cy.contains('Login failed - please check your username and password and try again.').should('be.visible');
  });
});