export default class LeftMenuModule {
  private readonly leftMenuItemSel = "div#left-sidebar a.sidebar-item-link-basic"

    clickMenuOption(menuOptionLabel: string) {
    cy.get(`${this.leftMenuItemSel} :contains(${menuOptionLabel})`)
      .should("be.visible")
      .realClick()

    return this
  }
}