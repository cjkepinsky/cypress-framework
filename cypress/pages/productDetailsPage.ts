import BasePage from "pages/basePage";
import booksCatalog from "consts/booksCatalog.json";

export default class ProductDetailsPage extends BasePage {
  protected container = '.product_main';
  private readonly title = `${this.container} h1`;
  private readonly price = `${this.container} .price_color`;
  private readonly availability = `${this.container} .availability`;
  private readonly productDescription = '#product_description';
  private readonly productInformationRows = 'table.table.table-striped tr';

  shouldHaveTitle(bookTitle: string) {
    cy.get(this.title)
      .should('be.visible')
      .and('contain', bookTitle);

    return this;
  }

  shouldShowPrice() {
    cy.get(this.price)
      .should('be.visible')
      .and('not.be.empty');

    return this;
  }

  shouldShowAvailability() {
    cy.get(this.availability)
      .should('be.visible')
      .and('contain', booksCatalog.availability.inStock);

    return this;
  }

  shouldShowProductDescription() {
    cy.get(this.productDescription)
      .should('be.visible')
      .and('not.be.empty');

    return this;
  }

  shouldShowProductInformation() {
    cy.get(this.productInformationRows)
      .should('have.length.at.least', booksCatalog.productInformation.length);

    booksCatalog.productInformation.forEach(label => {
      cy.contains(`${this.productInformationRows} th`, label).should('be.visible');
    });

    return this;
  }
}
