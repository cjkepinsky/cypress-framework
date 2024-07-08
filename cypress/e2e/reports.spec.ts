import LoginPage from 'pages/loginPage';
import HomePage from 'pages/homePage';
import config from 'config/config';
import commonRoutes from "routes/commonRoutes"
import ReportsPage from "pages/reportsPage";

describe('Running Report', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const reportsPage = new ReportsPage()

  before(() => {
    commonRoutes.getAsyncRoute()
    commonRoutes.postAsyncRoute()
  })

  beforeEach(() => {
    loginPage
      .openPage()
      .typeUsername(config.credentials.username)
      .typePassword(config.credentials.password)
      .clickLoginBtn()

    homePage
      .isVisible()
      .waitForRoute('postAsyncRoute')
  });

  it('should run Project Profitability report', () => {
    homePage.topMenu
      .mouseOverMenuOption("Reports & Settings")
      .clickSubMenuOptionByClass('module-Reports')
    reportsPage
      .wait(2)

      .isVisible()
      .typeFilterInput('Project Profitability{enter}')
      .wait(1)
      .clickRecordWith('Project Profitability')

    reportsPage.detailsView
      .isVisible()
      .clickRunReportBtn()
      .wait(2)

      .areReportResultsGenerated()
  });
});