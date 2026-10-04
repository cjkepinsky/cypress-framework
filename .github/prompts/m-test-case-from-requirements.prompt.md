---
description: "[Group M] Design manual and Cypress test cases from acceptance criteria"
agent: ask
---
Design test cases for this requirement or acceptance criterion: ${input:requirement:requirement text, issue, or user story}.

1. Read the README, relevant constants, Page Objects, specs, and configuration. This repository has no formal business
   requirements document, so ask for missing acceptance criteria instead of inventing product rules.
2. Identify the implementation and test files related to the requirement, if they exist.
3. List equivalence classes and boundary values in a table with examples and valid/invalid classification.
4. Use a decision table or state-transition table when the behavior has multiple conditions or states.
5. Propose manual test cases ordered by risk. Each case must include an ID, preconditions, exact data, executable steps,
   exact expected results, priority, risk rationale, and the design technique used. Use this structure:

   `ID | Title | Preconditions | Data | Steps | Expected result | Priority | Risk | Technique`
6. For each applicable case, identify whether it can be automated with the current Cypress Page Object Model and name the
   target spec or Page Object.
7. Separate observed code-versus-requirement mismatches from questions that need product-owner clarification.

Do not add requirements that are absent from the supplied acceptance criteria or repository evidence.
