# App Blueprint

## app_goal
Build a **scoped ServiceNow Post Incident Review (PIR) application** for non-production use on the PDI that standardizes incident retrospectives, captures evidence, enforces approvals, and tracks remediation actions to closure.

### Success criteria
- PIR record cannot move to approval without an **executive summary**
- PIR record must reference at least **one Incident**
- Every action item has an **owner**, **due date**, and **status**
- Closed PIRs are **read-only** for non-admin users
- Managers can review progress from PIR list, action list, and dashboard/report views

## domain_model

### 1. Core table: PIR
**Table label:** `Post Incident Review`
**Suggested table name:** `x_openclaw_pir_review`

**Key fields**
- `number` — auto-number
- `short_description` — short text, mandatory
- `state` — choice: `draft`, `review`, `approved`, `closed`
- `priority` — choice or integer
- `incident_count` — integer, derived/read-only
- `review_owner` — reference `sys_user`
- `executive_summary` — HTML or journal/large text, mandatory before approval
- `detailed_findings` — large text
- `root_cause_summary` — large text
- `customer_impact` — large text
- `service_impact` — large text
- `started_at` — date/time
- `restored_at` — date/time
- `review_due_date` — date
- `approved_by` — reference `sys_user`
- `approved_at` — date/time
- `closed_at` — date/time

### 2. PIR Incident link table
**Table label:** `PIR Incident Link`
**Suggested table name:** `x_openclaw_pir_incident`

**Purpose**
Allows one PIR to reference one or many Incidents without abusing a comma-separated field.

**Fields**
- `pir` — reference `x_openclaw_pir_review`, mandatory
- `incident` — reference `incident`, mandatory
- `is_primary` — true/false
- `impact_notes` — short text or large text

**Constraint**
- Unique on (`pir`, `incident`)

### 3. PIR Change link table
**Table label:** `PIR Change Link`
**Suggested table name:** `x_openclaw_pir_change`

**Fields**
- `pir` — reference `x_openclaw_pir_review`, mandatory
- `change_request` — reference `change_request`, mandatory
- `relationship_type` — choice: `related`, `caused_by`, `recovery_change`

**Constraint**
- Unique on (`pir`, `change_request`)

### 4. Evidence table
**Table label:** `PIR Evidence`
**Suggested table name:** `x_openclaw_pir_evidence`

**Fields**
- `pir` — reference `x_openclaw_pir_review`, mandatory
- `title` — short text, mandatory
- `evidence_type` — choice: `log`, `screenshot`, `timeline`, `document`, `link`, `other`
- `description` — large text
- `source_url` — URL
- `attachment` — attachment support via record attachments
- `captured_by` — reference `sys_user`
- `captured_at` — date/time
- `is_sensitive` — true/false

### 5. Action item table
**Table label:** `PIR Action Item`
**Suggested table name:** `x_openclaw_pir_action`

**Fields**
- `pir` — reference `x_openclaw_pir_review`, mandatory
- `short_description` — short text, mandatory
- `description` — large text
- `owner` — reference `sys_user`, mandatory
- `assignment_group` — reference `sys_user_group`
- `due_date` — date, mandatory
- `state` — choice: `open`, `in_progress`, `blocked`, `done`, `cancelled`
- `priority` — choice
- `completion_notes` — large text
- `completed_at` — date/time

## roles_and_acls

### Roles
- `x_openclaw_pir.admin`
- `x_openclaw_pir.manager`
- `x_openclaw_pir.contributor`
- `x_openclaw_pir.reader`

### Access model
**Admin**
- full CRUD on all PIR tables
- override close/read-only restrictions
- manage configuration and ACL exceptions

**Manager**
- create/update PIRs
- submit for review/approval
- read all PIR child records
- update action items
- approve PIR if explicitly allowed by process

**Contributor**
- read PIRs they are assigned to / allowed to view
- create and update evidence
- create and update action items they own
- cannot approve or close PIRs

**Reader**
- read-only access to approved/closed PIRs and related child records

### ACL plan
#### PIR table
- **create**: admin, manager
- **read**: admin, manager, contributor, reader
- **write**:
  - admin always
  - manager/contributor only when state != `closed`
- **delete**: admin only

#### PIR Incident / Change links
- **create/write**: admin, manager
- **read**: all PIR roles
- **delete**: admin, manager

#### Evidence
- **create**: admin, manager, contributor
- **read**: all PIR roles
- **write**:
  - admin always
  - manager always before close
  - contributor only on records they created or PIRs not closed
- **delete**: admin, manager

#### Action items
- **create**: admin, manager, contributor
- **read**: all PIR roles
- **write**:
  - admin always
  - manager always before PIR close
  - contributor only when `owner == current user` and PIR not closed
- **delete**: admin, manager

### Critical ACL guardrails
- No cross-scope writes without review
- No wildcard script ACLs if field ACLs can do the job
- Closed PIR must be enforced at ACL/business-rule layer, not just UI policy

## flows_and_business_rules

### State flow
- `draft` → `review` → `approved` → `closed`

### Business rules
1. **At least one Incident required**
   - On submit to `review` or `approved`, reject if no linked incident exists
2. **Executive summary required before approval**
   - Block transition to `approved` if empty
3. **Action item quality gate**
   - Any open action item must have `owner` and `due_date`
4. **Closed PIR read-only**
   - Prevent updates for non-admin roles once PIR state is `closed`
5. **Action completion timestamp**
   - When action item moves to `done`, stamp `completed_at`
6. **Parent summary rollups**
   - Maintain counts on PIR: linked incidents, total actions, open actions, evidence items

### Flow Designer candidates
1. **PIR submitted for review**
   - Notify review owner / manager
2. **PIR approved**
   - Notify stakeholders
3. **Action item assigned**
   - Notify owner
4. **Action item overdue**
   - Daily reminder to owner and manager
5. **All action items completed**
   - Notify PIR owner that PIR is ready for closure review

## api_surface

### Minimal API surface for MVP
- Standard form/list UI only
- Optional Scripted REST later for:
  - create PIR from external incident tooling
  - sync action items
  - reporting export

### For MVP, do not add yet
- public APIs
- inbound integrations
- cross-instance sync
- agent-triggered write endpoints

## test_plan

### ATF / manual test scenarios
1. Create PIR in `draft`
2. Add linked Incident
3. Add linked Change
4. Add evidence item
5. Add action item with owner and due date
6. Try moving to `approved` without executive summary → must fail
7. Add executive summary, move to `review`
8. Approve PIR successfully
9. Close PIR successfully
10. Attempt non-admin edit after close → must fail
11. Validate contributor can only edit owned action items
12. Validate reader cannot edit anything

### Smoke tests after each install
- App menu visible
- PIR table opens
- Child related lists render
- New record creation works
- State transitions behave correctly
- ACLs enforce close-state lock

## deployment_plan
1. Keep all work in scoped app `x_openclaw_pir`
2. Build locally with `now-sdk build`
3. Install to PDI with `now-sdk install --auth pdi`
4. Validate forms, related lists, roles, and actions in UI
5. Add ATF once base schema is stable
6. Run Instance Scan after meaningful increments

## risks_and_guardrails

### Main risks
- **ACL drift:** easiest way to create security bugs
- **Over-automation early:** Flow Designer sprawl before schema stabilizes
- **Cross-scope issues:** avoid unnecessary dependencies
- **UI-only validation:** dangerous if rules are not enforced server-side

### Guardrails
- Keep MVP schema small
- Use link tables for Incident/Change relationships
- Enforce critical state rules server-side
- Avoid browser-first authoring as the primary build method
- Add approvals and notifications only after base CRUD is stable
