import BaseDashboardPage from "pages/baseDashboardPage";
import ContactDetailsView from "pages/contactsPage/contactDetailsView";

export default class ContactsPage extends BaseDashboardPage {
  public contactDetailsView = new ContactDetailsView()
  protected container = "body.mod-Contacts"

  clickContact(name: string) {
    cy.get(`.listViewNameLink:contains(${name})`)
      // TODO strange scroll behavior hides this select
      .click({force: true})

    return this
  }

  doesContactRecordContain(text: string) {
    cy.get(`.listViewTd`)
      .should('contain', text)
      .and("be.visible")

    return this
  }

  isContactTitleVisibleFor(name: string, title: string) {
    cy.get(`.listViewTd:contains(${name})`)
      .should('contain', title)
      .and("be.visible")

    return this
  }
}