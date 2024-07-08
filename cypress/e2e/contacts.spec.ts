import LoginPage from 'pages/loginPage';
import HomePage from 'pages/homePage';
import config from 'config/config';
import ContactsPage from "pages/contactsPage";
import commonRoutes from "routes/commonRoutes"
import WaitHelper from "helpers/waitHelper";
// import ApiHelper from "helpers/apiHelper";

describe('Creating Contacts', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const contactsPage = new ContactsPage()

  before(() => {
    Cypress.on('uncaught:exception', () => false)

    commonRoutes.getAsyncRoute()
    commonRoutes.postAsyncRoute()
  })

  beforeEach(() => {
    // TODO Api login
    // ApiHelper.loginAndSetCookie({
    //   username: config.credentials.username,
    //   password: config.credentials.password
    // }).then((loginResponse) => {
    //   cy.log('Login response in test:', JSON.stringify(loginResponse));
    //
    //   if (!loginResponse || !loginResponse.body) {
    //     throw new Error('Login response or body is undefined');
    //   }

    loginPage
      .openPage()
      .typeUsername(config.credentials.username)
      .typePassword(config.credentials.password)
      .clickLoginBtn()

    homePage
      .isVisible()
      .waitForRoute('postAsyncRoute')
  });

  it('should create new Contact', () => {
    let name = Date.now().toString() + "Test"
    let surname = Date.now().toString() + "User"
    let title = "Sir" + Date.now().toString()
    let newContactName = `00${name} 00${surname}`

    homePage.topMenu
      .mouseOverMenuOption("Sales & Marketing")
      .clickSubMenuOption("Contacts")
    contactsPage.isVisible()

    WaitHelper.wait(2)
    contactsPage.leftMenu.clickMenuOption("Create Contact")
    WaitHelper.wait(2)
    contactsPage.contactDetailsView
      .isFirstNameInputVisible()
      .typeFirstName(name)
      .typeLastName(surname)
      .clickCategorySelect()
      .isCategoryDropdownVisible()
      .clickCategoryOption('Customers')
      .clickFilledCategorySelect()
      .clickCategoryOption('Suppliers')
      .clickBusinessRoleSelect()
      .isBusinessRoleDropdownVisible()
      .clickBusinessRoleOption('CEO')
      .clickSaveBtn()
      .isReturnToListBtnVisible()
      .clickReturnToListBtn()

    contactsPage
      .waitForRoute('getAsyncRoute')
      .doesContactRecordContain(`${name} ${surname}`)
      .clickContact(`${name} ${surname}`)
    contactsPage.contactDetailsView
      .isVisible()
      .clickEditContactBtn()

      .isFirstNameInputVisible()

      .typeFirstName("00")
      .typeLastName("00")
      .typeTitle(title)
      .clickSaveBtn()
      .isReturnToListBtnVisible()
      .clickReturnToListBtn()

    contactsPage
      .waitForRoute('getAsyncRoute')
      .doesContactRecordContain(newContactName)
      .isContactTitleVisibleFor(newContactName, title)
  });
});