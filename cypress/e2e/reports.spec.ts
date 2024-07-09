import LoginPage from 'pages/loginPage';
import HomePage from 'pages/homePage';
import config from 'config/config';
import commonRoutes from "routes/commonRoutes"
import ReportsPage from "pages/reportsPage";
import menu from "consts/menuOptions.json"
import reports from "consts/reportsNames.json"

describe('Reports Functionality', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const reportsPage = new ReportsPage()

  beforeEach(() => {
    commonRoutes.getAsyncRoute()
    commonRoutes.postAsyncRoute()

    loginPage
      .openPage()
      .typeUsername(config.credentials.username)
      .typePassword(config.credentials.password)
      .clickLoginBtn()

    homePage
      .isVisible()
      .waitForRoute('postAsyncRoute')
  });

  it('should run Project Profitability Report', () => {
    homePage.topMenu
      .mouseOverMenuOption(menu.topMenu.reportsOptions.label)
      .clickSubMenuOptionByClass(menu.topMenu.reportsOptions.submenu.reports.cssClass)
    reportsPage
      .wait(2)

      .isVisible()
      .typeFilterInput(`${reports.projectProfitability}{enter}`)
      .wait(1)
      .clickRecordWith(reports.projectProfitability)

    reportsPage.detailsView
      .wait(2)
      .isRunReportBtnVisible()
      .clickRunReportBtn()
      .wait(2)

      .areReportResultsGenerated()
  });
});