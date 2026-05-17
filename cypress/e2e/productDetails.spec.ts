import HomePage from 'pages/homePage';
import ProductDetailsPage from 'pages/productDetailsPage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Product details', () => {
  const homePage = new HomePage();
  const productDetailsPage = new ProductDetailsPage();

  it('should display details for a selected book', () => {
    homePage
      .openPage()
      .openBookDetails(booksCatalog.books.tippingTheVelvet);

    productDetailsPage
      .isVisible()
      .hasTitle(booksCatalog.books.tippingTheVelvet)
      .hasPriceVisible()
      .hasAvailabilityVisible()
      .hasProductDescriptionVisible()
      .hasProductInformationVisible();
  });
});
