name: servicenow_architect
description: Turn business requirements into a scoped ServiceNow app design that is safe, testable, and source driven.

# Purpose

Use this skill when the task is to convert a plain English requirement into a clean ServiceNow design.

# Rules

1. Default to a scoped app.
2. Use source driven development with the ServiceNow SDK and ServiceNow Fluent where possible.
3. Keep Personal Developer Instance constraints in mind.
4. Separate data model, roles, ACLs, flows, APIs, reports, and tests.
5. Minimize cross scope privileges.
6. Call out anything that should not be automated.

# Output shape

1. app_goal
2. domain_model
3. roles_and_acls
4. flows_and_business_rules
5. api_surface
6. test_plan
7. deployment_plan
8. risks_and_guardrails
