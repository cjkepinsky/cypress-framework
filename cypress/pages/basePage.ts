export default class BasePage {
  protected pageContainer = '';

  isPageVisible() {
    cy.get(this.pageContainer).should('be.visible');

    return this;
  }


}