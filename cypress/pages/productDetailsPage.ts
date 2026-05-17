import BasePage from "pages/basePage";
import booksCatalog from "consts/booksCatalog.json";

export default class ProductDetailsPage extends BasePage {
  protected container = '.product_main';
  private readonly title = `${this.container} h1`;
  private readonly price = `${this.container} .price_color`;
  private readonly availability = `${this.container} .availability`;
  private readonly productDescription = '#product_description';
  private readonly productInformationRows = 'table.table.table-striped tr';

  hasTitle(bookTitle: string) {
    cy.contains(this.title, bookTitle).should('be.visible');

    return this;
  }

  hasPriceVisible() {
    cy.get(this.price).should('be.visible');

    return this;
  }

  hasAvailabilityVisible() {
    cy.get(this.availability)
      .should('be.visible')
      .and('contain', booksCatalog.availability.inStock);

    return this;
  }

  hasProductDescriptionVisible() {
    cy.get(this.productDescription).should('be.visible');

    return this;
  }

  hasProductInformationVisible() {
    cy.get(this.productInformationRows).should('have.length.at.least', 5);

    return this;
  }
}
