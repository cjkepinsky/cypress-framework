import HomePage from 'pages/homePage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Books home page', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.openPage();
  });

  it('should display core storefront elements', () => {
    homePage
      .shouldBeVisible()
      .shouldShowHeader()
      .shouldShowPageTitle(booksCatalog.pageTitles.allProducts)
      .shouldShowCategorySidebar()
      .shouldShowAtLeastBookCards(20)
      .shouldShowPagination();
  });

  it('should display known books in the product grid', () => {
    homePage
      .shouldShowBook(booksCatalog.books.aLightInTheAttic)
      .shouldShowBook(booksCatalog.books.tippingTheVelvet);
  });
});
