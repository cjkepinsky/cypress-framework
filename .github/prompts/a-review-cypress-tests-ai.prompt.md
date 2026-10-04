---
description: "[Group A] Review Cypress tests, especially AI-generated tests, against the framework quality gates"
agent: ask
---
Review the Cypress tests in `${input:scope:file, folder, commit, or PR}`.

Use `.github/agents/cypress-test-reviewer.agent.md` and the applicable `.github/instructions/` file as the review
standard. Report each gate as `PASS`, `PROBLEM`, or `NOT APPLICABLE` with a precise file and line.

End with the three most important fixes, an accept/needs-changes/reject recommendation, and one concrete sabotage
mutation that the tests should detect or currently miss. Do not modify files.
