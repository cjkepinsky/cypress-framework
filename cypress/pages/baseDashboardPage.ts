import TopMenuModule from "pages/basePage/topMenuModule";
import BasePage from "pages/basePage";
import LeftMenuModule from "pages/basePage/leftMenuModule";

export default abstract class BaseDashboardPage extends BasePage {
  public topMenu = new TopMenuModule()
  public leftMenu = new LeftMenuModule()
}