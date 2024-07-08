import BaseDashboardPage from "pages/baseDashboardPage";

export default class ReportDetailsView extends BaseDashboardPage {
  private readonly runReportBtn = 'button[name=FilterForm_applyButton]'
  private readonly resultsRows = 'tr.listViewRow'
  protected container = 'form#DetailForm';

  isRunReportBtnVisible() {
    cy.get(this.runReportBtn)
      .should("be.visible")

    return this
  }

  clickRunReportBtn() {
    cy.get(this.runReportBtn).click({force: true})

    return this
  }

  areReportResultsGenerated() {
    cy.get(this.resultsRows).its('length')
      .should('be.gt', 0)

    return this
  }
}