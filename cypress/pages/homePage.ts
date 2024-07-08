import BaseDashboardPage from "pages/baseDashboardPage";

export default class HomePage extends BaseDashboardPage {
  protected container = 'main#dashboard_columns';

  openPage() {
    super.openPage('https://demo.1crmcloud.com/index.php?module=Home&action=index')

    return this
  }
}