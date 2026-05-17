import HomePage from 'pages/homePage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Catalog pagination', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.openPage();
  });

  it('should move to the next catalog page', () => {
    homePage
      .isPaginationVisible()
      .goToNextPage()
      .isCurrentPageIndicatorVisible(booksCatalog.pagination.secondPage)
      .isPreviousPageLinkVisible()
      .hasVisibleBookCards(20);
  });
});
