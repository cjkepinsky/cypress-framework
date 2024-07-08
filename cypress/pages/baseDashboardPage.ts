import TopMenuModule from "pages/basePage/topMenuModule";
import BasePage from "pages/basePage";
import LeftMenuModule from "pages/basePage/leftMenuModule";

export default class BaseDashboardPage extends BasePage {
  protected container = ''
  public topMenu = new TopMenuModule()
  public leftMenu = new LeftMenuModule()
}