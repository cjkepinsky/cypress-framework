export default class WaitHelper {
  static waitForEvent(alias: string) {
    return cy.wait(alias)
  }

  static wait(seconds: number) {
    return cy.wait(seconds * 100)
  }
}