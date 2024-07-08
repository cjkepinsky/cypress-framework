export default class CommonRoutes {
  public static postAsyncRoute() {
    cy.intercept('POST', `**/async.php?**`).as('postAsyncRoute')
  }

  public static getAsyncRoute() {
    cy.intercept('GET', `**/async.php?**`).as('getAsyncRoute')
  }
}