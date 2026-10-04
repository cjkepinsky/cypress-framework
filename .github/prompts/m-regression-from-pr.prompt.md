---
description: "[Group M] Analyze pull-request impact and create a Cypress regression checklist"
agent: ask
---
Analyze pull request `${input:pr:PR number, commit, or branch}` from a Cypress test-engineering perspective.

1. Explain in plain language what changes for the test framework, test execution, or CI user, using only evidence from
   the diff and repository. Discuss customer-facing impact only when the diff contains reliable application evidence.
2. Map changed configuration, Page Objects, selectors, fixtures, scripts, and CI files to affected specs.
3. Identify direct and indirect impact through shared Page Objects, constants, environment loading, reporters, and
   Cypress configuration.
4. Score each risk area in a table using probability 1-3 multiplied by impact 1-3. Explain the score.
5. Propose a prioritized regression checklist with concrete data and commands, including targeted specs, quality checks,
   and a full headless run where appropriate.
6. State what does not need testing and why.
7. Identify external-site, browser, or environment assumptions and distinguish them from verified regressions.

Do not modify code. If the PR references a requirement or acceptance criterion that is not present in the repository,
state that it was not found instead of inventing it.
