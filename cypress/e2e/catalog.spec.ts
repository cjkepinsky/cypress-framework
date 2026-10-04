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
      .shouldShowPageTitle(booksCatalog.categories.travel)
      .shouldShowBreadcrumb(booksCatalog.categories.travel)
      .shouldShowAtLeastBookCards(1)
      .shouldShowBook(booksCatalog.books.itsOnlyTheHimalayas);
  });
});
