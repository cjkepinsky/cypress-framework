import HomePage from 'pages/homePage';
import booksCatalog from 'consts/booksCatalog.json';

describe('Book catalog', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.openPage();
  });

  it('should open a public category and show matching books', () => {
    homePage
      .openCategory(booksCatalog.categories.travel)
      .isPageTitleVisible(booksCatalog.categories.travel)
      .isBreadcrumbVisible(booksCatalog.categories.travel)
      .hasVisibleBookCards(1)
      .isBookItemVisible(booksCatalog.books.itsOnlyTheHimalayas);
  });
});
