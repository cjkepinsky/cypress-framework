import BasePage from "pages/basePage";
import booksCatalog from "consts/booksCatalog.json";
import ProductDetailsPage from "pages/productDetailsPage";

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

  shouldShowPageTitle(title: string) {
    cy.contains(this.pageTitle, title).should('be.visible');

    return this;
  }

  shouldShowCategorySidebar() {
    cy.get(this.categorySidebar)
      .should('be.visible')
      .and('contain', booksCatalog.categories.books)
      .and('contain', booksCatalog.categories.travel)
      .and('contain', booksCatalog.categories.mystery);

    return this;
  }

  shouldShowAtLeastBookCards(minimumCount = 1) {
    cy.get(this.bookCards)
      .should('have.length.at.least', minimumCount)
      .each(bookCard => {
        cy.wrap(bookCard).should('be.visible');
      });

    return this;
  }

  shouldShowBook(bookTitle: string) {
    this.bookLink(bookTitle).should('be.visible');

    return this;
  }

  openBookDetails(bookTitle: string) {
    this.bookLink(bookTitle)
      .should('be.visible')
      .click();

    return new ProductDetailsPage();
  }

  openCategory(categoryName: string) {
    cy.get(this.categorySidebar)
      .contains('a', categoryName)
      .should('be.visible')
      .click();

    return this;
  }

  shouldShowPagination() {
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

  shouldShowPreviousPageLink() {
    cy.get(this.previousPageLink).should('be.visible');

    return this;
  }

  shouldShowCurrentPageIndicator(pageText: string) {
    cy.get(this.currentPageIndicator)
      .should('be.visible')
      .and('contain', pageText);

    return this;
  }

  private bookLink(bookTitle: string) {
    return cy.get(`${this.bookCards} h3 a`).filter((_, element) => {
      return element.getAttribute('title') === bookTitle;
    });
  }
}
