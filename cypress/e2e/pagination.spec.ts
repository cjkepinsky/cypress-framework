import HomePage from 'pages/homePage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Catalog pagination', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.openPage();
  });

  it('should move to the next catalog page', () => {
    homePage
      .shouldShowPagination()
      .goToNextPage()
      .shouldShowCurrentPageIndicator(booksCatalog.pagination.secondPage)
      .shouldShowPreviousPageLink()
      .shouldShowAtLeastBookCards(20);
  });
});
