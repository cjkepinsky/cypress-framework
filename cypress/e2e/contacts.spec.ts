import LoginPage from 'pages/loginPage';
import HomePage from 'pages/homePage';
import config from 'config/config';
import ContactsPage from "pages/contactsPage";
import commonRoutes from "routes/commonRoutes"
import menu from "consts/menuOptions.json"
import categories from "consts/contacts/contactsCategories.json"
import roles from "consts/contacts/contactsRoles.json"

describe('Creating Contacts', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const contactsPage = new ContactsPage()

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

  it('should create new Contact', () => {
    const name = Date.now().toString() + "Test"
    const surname = Date.now().toString() + "User"
    const title = "Sir" + Date.now().toString()
    const newContactName = `00${name} 00${surname}`

    homePage.topMenu
      .mouseOverMenuOption(menu.topMenu.salesMarketing)
      .clickSubMenuOption("Contacts")
    contactsPage
      .isVisible()
      .wait(2)
    contactsPage.leftMenu.clickMenuOption(menu.leftMenu.createContact)
    contactsPage.contactDetailsView
      .wait(2)
      .isFirstNameInputVisible()
      .typeFirstName(name)
      .typeLastName(surname)
      .clickCategorySelect()
      .isCategoryDropdownVisible()
      .clickCategoryOption(categories.customers)
      .clickFilledCategorySelect()
      .clickCategoryOption(categories.suppliers)
      .clickBusinessRoleSelect()
      .isBusinessRoleDropdownVisible()
      .clickBusinessRoleOption(roles.ceo)
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