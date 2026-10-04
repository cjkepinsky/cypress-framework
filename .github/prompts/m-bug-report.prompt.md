---
description: "[Group M] Prepare a technically useful bug report from Cypress tester notes"
agent: ask
---
Prepare a bug report from these tester notes: ${input:notes:what was done and what was observed}.

- Separate the observed behavior, expected behavior, reproduction steps, and impact.
- Include the environment, URL, browser, Cypress spec or command, test data, timestamps, and available screenshots,
  videos, reports, or network evidence.
- Identify the relevant Page Object and spec when the evidence points to the test framework. Do not invent a production
  source file; this repository does not contain the Books to Scrape application source.
- Include an API request and response only when they were actually observed or supplied. Never fabricate an endpoint,
  payload, credential, or token.
- Distinguish a test defect, public-demo-site change, environment issue, and suspected application defect.
- Recommend severity based on user impact and reproducibility.
- If no issue-template file exists in this repository, provide the report in a Markdown structure that can be pasted into
  GitHub Issues rather than creating a template without approval.
