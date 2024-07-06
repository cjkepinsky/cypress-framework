export default class TopMenuModule {
  private readonly topMenuTabs = "nav a.menu-tab"
  private readonly subMenuTabs = "div.menu-tab-sub"

  mouseOverMenuOption(menuOptionLabel: string) {
    cy.get(`${this.topMenuTabs} :contains(${menuOptionLabel})`)
     .should("be.visible")
     .realHover({pointer: 'mouse'})
     .wait(1000)

    return this
  }

  clickSubMenuOption(menuOptionLabel: string) {
    cy.get(`${this.subMenuTabs} :contains(${menuOptionLabel})`)
      .should("be.visible")
      .realClick()

    return this
  }
}