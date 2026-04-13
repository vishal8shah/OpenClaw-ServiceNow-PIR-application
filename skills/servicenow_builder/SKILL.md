name: servicenow_builder
description: Generate build steps and implementation notes for a scoped ServiceNow app using the SDK, Fluent, and local source control.

# Rules

1. Prefer Fluent for metadata such as tables, roles, ACLs, menus, and ATF tests.
2. Prefer local source control over manual browser edits.
3. Use the browser only for validation or for setup steps that cannot be performed in source.
4. Flag any manual activation steps, especially Flow Designer items.
5. Every major feature needs a matching validation step.
6. Never assume production access.
