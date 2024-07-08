export default class TopMenuModule {
  private readonly topMenuTabs = "nav a.menu-tab"
  private readonly subMenuTabs = "div.menu-tab-sub"

  mouseOverMenuOption(menuOptionLabel: string) {
    cy.get(`${this.topMenuTabs} :contains(${menuOptionLabel})`)
     .should("be.visible")
     .realHover({pointer: 'mouse'})
      // TODO waiting for submenu to appear, better solution?
     .wait(1500)

    return this
  }

  clickSubMenuOption(menuOptionLabel: string) {
    cy.get(`${this.subMenuTabs} :contains(${menuOptionLabel})`)
      .should("be.visible")
      // TODO something hides this element
      .click({force: true})

    return this
  }

  clickSubMenuOptionByClass(className: string) {
    cy.get(`span.${className}`).closest(this.subMenuTabs)
      .realClick()

    return this
  }
}