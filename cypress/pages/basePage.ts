import booksCatalog from "consts/booksCatalog.json";

export default abstract class BasePage {
  protected abstract container: string;
  private readonly breadcrumb = '.breadcrumb';

  isVisible() {
    cy.get(this.container).should('be.visible');

    return this;
  }

  isHeaderVisible() {
    cy.contains('a', booksCatalog.siteTitle).should('be.visible');

    return this;
  }

  isBreadcrumbVisible(label: string) {
    cy.get(this.breadcrumb)
      .should('be.visible')
      .and('contain', label);

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
