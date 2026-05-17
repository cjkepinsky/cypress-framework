import HomePage from 'pages/homePage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Books home page', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.openPage();
  });

  it('should display core storefront elements', () => {
    homePage
      .isVisible()
      .isHeaderVisible()
      .isPageTitleVisible(booksCatalog.pageTitles.allProducts)
      .isCategorySidebarVisible()
      .hasVisibleBookCards(20)
      .isPaginationVisible();
  });

  it('should display known books in the product grid', () => {
    homePage
      .isBookItemVisible(booksCatalog.books.aLightInTheAttic)
      .isBookItemVisible(booksCatalog.books.tippingTheVelvet);
  });
});
