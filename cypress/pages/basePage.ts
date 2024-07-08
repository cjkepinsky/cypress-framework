export default abstract class BasePage {
  protected abstract container: string;

  isVisible() {
    cy.get(this.container).should('be.visible');

    return this;
  }

  openPage(url: string) {
    cy.visit(url)

    return this
  }

  waitForRoute(routeAlias: string) {
    cy.wait(`@${routeAlias}`, {timeout: 10000})

    return this
  }

  wait(seconds: number) {
    cy.wait(seconds * 1000)

    return this
  }
}