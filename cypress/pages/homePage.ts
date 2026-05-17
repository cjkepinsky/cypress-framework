import BasePage from "pages/basePage";
import booksCatalog from "consts/booksCatalog.json";

export default class HomePage extends BasePage {
  protected container = 'body';
  private readonly pageTitle = '.page-header h1';
  private readonly categorySidebar = '.side_categories';
  private readonly bookCards = '.product_pod';
  private readonly nextPageLink = '.next a';
  private readonly previousPageLink = '.previous a';
  private readonly currentPageIndicator = '.current';

  openPage() {
    super.openPage('/')

    return this
  }

  isPageTitleVisible(title: string) {
    cy.contains(this.pageTitle, title).should('be.visible');

    return this;
  }

  isCategorySidebarVisible() {
    cy.get(this.categorySidebar)
      .should('be.visible')
      .and('contain', booksCatalog.categories.books)
      .and('contain', booksCatalog.categories.travel)
      .and('contain', booksCatalog.categories.mystery);

    return this;
  }

  hasVisibleBookCards(minimumCount = 1) {
    cy.get(this.bookCards)
      .should('have.length.at.least', minimumCount)
      .each(bookCard => {
        cy.wrap(bookCard).should('be.visible');
      });

    return this;
  }

  isBookItemVisible(bookTitle: string) {
    cy.get(`${this.bookCards} h3 a[title="${bookTitle}"]`).should('be.visible');

    return this;
  }

  openBookDetails(bookTitle: string) {
    cy.get(`${this.bookCards} h3 a[title="${bookTitle}"]`)
      .should('be.visible')
      .click();

    return this;
  }

  openCategory(categoryName: string) {
    cy.contains(`${this.categorySidebar} a`, categoryName)
      .should('be.visible')
      .click();

    return this;
  }

  isPaginationVisible() {
    cy.get(this.nextPageLink).should('be.visible');
    cy.get(this.currentPageIndicator).should('contain', booksCatalog.pagination.firstPage);

    return this;
  }

  goToNextPage() {
    cy.get(this.nextPageLink)
      .should('be.visible')
      .click();

    return this;
  }

  isPreviousPageLinkVisible() {
    cy.get(this.previousPageLink).should('be.visible');

    return this;
  }

  isCurrentPageIndicatorVisible(pageText: string) {
    cy.get(this.currentPageIndicator)
      .should('be.visible')
      .and('contain', pageText);

    return this;
  }
}
