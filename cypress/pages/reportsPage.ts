import BaseDashboardPage from "pages/baseDashboardPage";
import ReportDetailsView from "pages/reportsPage/reportDetailsView";

export default class ReportsPage extends BaseDashboardPage {
  protected container = "body.mod-Reports"
  private readonly filterInput = "input#filter_text"
  public detailsView = new ReportDetailsView()

  typeFilterInput(filterText: string) {
    cy.get(this.filterInput)
      .focus()
      .type(filterText)

    return this
  }

  clickRecordWith(text: string) {
    cy.get(`.listViewNameLink:contains(${text})`)
      // TODO strange scroll behavior hides this select
      .click({force: true})

    return this
  }
}