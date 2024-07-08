import BaseDashboardPage from "pages/baseDashboardPage";

export default class ReportDetailsView extends BaseDashboardPage {
  private readonly runReportBtn = 'button#listView-dbfe-FilterForm_applyButton'
  private readonly resultsRows = 'tr.listViewRow'
  protected container = 'form#DetailForm';

  clickRunReportBtn() {
    cy.get(this.runReportBtn).click()

    return this
  }

  areReportResultsGenerated() {
    cy.get(this.resultsRows).its('length')
      .should('be.gt', 0)

    return this
  }
}