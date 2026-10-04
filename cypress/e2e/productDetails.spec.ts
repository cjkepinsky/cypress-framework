import HomePage from 'pages/homePage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Product details', () => {
  const homePage = new HomePage();

  it('should display details for a selected book', () => {
    const productDetailsPage = homePage
      .openPage()
      .openBookDetails(booksCatalog.books.tippingTheVelvet);

    productDetailsPage
      .shouldBeVisible()
      .shouldHaveTitle(booksCatalog.books.tippingTheVelvet)
      .shouldShowPrice()
      .shouldShowAvailability()
      .shouldShowProductDescription()
      .shouldShowProductInformation();
  });
});
