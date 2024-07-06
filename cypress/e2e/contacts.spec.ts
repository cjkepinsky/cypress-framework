import LoginPage from 'pages/loginPage';
import HomePage from 'pages/homePage';
import { config } from 'config/config';
import ContactsPage from "pages/contactsPage";

describe('Creating Contacts', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const contactsPage = new ContactsPage()

  beforeEach(() => {
    loginPage
      .openPage()
      .typeUsername(config.credentials.username)
      .typePassword(config.credentials.password)
      .clickLoginBtn()

      homePage.isPageVisible()
  });

  it('should create new Contact', () => {
    homePage.topMenu
      .mouseOverMenuOption("Sales & Marketing")
      .clickSubMenuOption("Contacts")

    contactsPage.isPageVisible()
  });

});