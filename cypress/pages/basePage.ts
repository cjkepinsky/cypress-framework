import booksCatalog from "consts/booksCatalog.json";

export default abstract class BasePage {
  protected abstract container: string;
  private readonly breadcrumb = '.breadcrumb';

  shouldBeVisible() {
    cy.get(this.container).should('be.visible');

    return this;
  }

  shouldShowHeader() {
    cy.contains('a', booksCatalog.siteTitle).should('be.visible');

    return this;
  }

  shouldShowBreadcrumb(label: string) {
    cy.get(this.breadcrumb)
      .should('be.visible')
      .and('contain', label);

    return this;
  }

  openPage(url: string) {
    cy.visit(url);

    return this;
  }
}
