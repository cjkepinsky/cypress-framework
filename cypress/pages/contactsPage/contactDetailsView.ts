import BaseDashboardPage from "pages/baseDashboardPage";

export default class ContactDetailsView extends BaseDashboardPage {
  private readonly firstNameInput: string = "#DetailFormfirst_name-input"
  private readonly lastNameInput: string = "#DetailFormlast_name-input"
  private readonly titleInput: string = "#DetailFormtitle-input"
  private readonly businessRoleSelect: string = "#DetailFormbusiness_role-input"
  private readonly businessRoleDropdown: string = `${this.businessRoleSelect}-popup > .card-body`
  private readonly businessRoleOptions: string = `${this.businessRoleDropdown} .menu-option`
  private readonly categorySelect: string = "#DetailFormcategories-input"
  private readonly categorySelectFilled: string = `${this.categorySelect}-body`
  private readonly categoryDropdown: string = `${this.categorySelect}-search-list`
  private readonly categoryOptions: string = `${this.categoryDropdown} .menu-option`
  private readonly saveBtn: string = "button#DetailForm_save2"
  private readonly editBtn: string = "#DetailForm_edit-label"
  private readonly returnToListBtn: string = "#DetailForm_return_list"
  protected container = 'form#DetailForm';

  isFirstNameInputVisible() {
    cy.get(this.firstNameInput)
      .should("be.visible")

    return this
  }

  typeFirstName(firstName: string) {
    cy.get(this.firstNameInput)
      .focus()
      .type(firstName)

    return this
  }

  typeLastName(lastName: string) {
    cy.get(this.lastNameInput)
      .focus()
      .type(lastName)

    return this
  }

  typeTitle(title: string) {
    cy.get(this.titleInput)
      .focus()
      .type(title)

    return this
  }

  clickBusinessRoleSelect() {
    cy.get(this.businessRoleSelect)
      .focus()
      .click()
      .wait(500)

    return this
  }

  clickBusinessRoleOption(optionLabel: string) {
    cy.get(`${this.businessRoleOptions} :contains(${optionLabel})`)
      .should("be.visible")
      .click()
      .wait(500)

    return this
  }

  isBusinessRoleDropdownVisible() {
    cy.get(this.businessRoleDropdown)
      .should("be.visible")

    return this
  }

  clickCategorySelect() {
    cy.get(this.categorySelect)
      .focus()
      // TODO strange scroll behavior hides this select
      .click({force: true})
      .wait(500)

    return this
  }

  clickFilledCategorySelect() {
    cy.get(this.categorySelectFilled)
      // TODO strange scroll behavior hides this select
      .click({force: true})
      .wait(500)

    return this
  }

  clickCategoryOption(optionLabel: string) {
    cy.get(`${this.categoryOptions} :contains(${optionLabel})`)
      .scrollIntoView()
      .should("be.visible")
      // TODO strange scroll behavior hides this option
      .click({force: true})
      .wait(500)

    return this
  }

  isCategoryDropdownVisible() {
    cy.get(this.categoryDropdown)
      .should("be.visible")

    return this
  }

  clickSaveBtn() {
    cy.get(this.saveBtn).click()

    return this
  }

  clickEditContactBtn() {
    cy.get(this.editBtn).click()

    return this
  }

  clickReturnToListBtn() {
    // TODO strange scroll behavior hides this select
    cy.get(this.returnToListBtn).click({force: true})

    return this
  }

  isReturnToListBtnVisible() {
    cy.get(this.returnToListBtn)
      .should("be.visible")


    return this
  }
}