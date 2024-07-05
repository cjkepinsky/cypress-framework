export default class DashboardPage {
  private readonly userMenuButton = '#userMenu';

  isVisible() {
    cy.get(this.userMenuButton).should('be.visible');
    return this;
  }
}