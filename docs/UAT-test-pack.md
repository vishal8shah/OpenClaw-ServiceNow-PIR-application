# OpenClaw PIR — Detailed UAT / Regression Test Pack

## 1. Test objective
Validate that the OpenClaw PIR scoped app is deployable, navigable, secure enough for MVP, and functionally correct across core PIR lifecycle scenarios.

## 2. Test prerequisites
- App installed successfully in PDI
- Scope: `x_openclaw_pir`
- Application menu visible: `OpenClaw PIR`
- Test user roles available:
  - `x_openclaw_pir.admin`
  - `x_openclaw_pir.manager`
  - `x_openclaw_pir.contributor`
  - `x_openclaw_pir.reader`
- Ideally have at least:
  - one Incident record
  - one Change Request record
  - two test users (manager + contributor)

## 3. Suggested test data
- PIR short description: `PIR for Payments API outage`
- Incident: existing incident such as `INC001xxxx`
- Change Request: existing change such as `CHG00xxxx`
- Evidence title: `Splunk timeline export`
- Action item: `Add alert tuning for API latency`

## 4. Execution roles
- **Admin:** verify full control and exception paths
- **Manager:** verify create/update/review flows
- **Contributor:** verify limited child-record contribution flows
- **Reader:** verify read-only behavior

---

## UAT-001 — Application menu and modules visible
### Goal
Confirm navigator usability.

### Steps
1. Open the left navigator.
2. Search for `OpenClaw PIR`.
3. Expand the menu.

### Expected
Modules visible:
- PIR Reviews
- New PIR Review
- Action Items
- New Action Item
- Evidence
- Incident Links
- Change Links

### Result
- Pass / Fail
- Notes

---

## UAT-002 — PIR Review list layout
### Goal
Confirm list view usability for PIRs.

### Steps
1. Open `OpenClaw PIR > PIR Reviews`.
2. Confirm visible columns.

### Expected
Useful columns include:
- Number
- Short description
- State
- Review owner
- Review due date
- Incident count
- Open action count
- Updated timestamp

### Result
- Pass / Fail
- Notes

---

## UAT-003 — Create PIR Review
### Goal
Confirm PIR record creation works.

### Steps
1. Open `New PIR Review`.
2. Enter a short description.
3. Set review owner.
4. Save.

### Expected
- PIR saves successfully
- Record number generated
- Default state is valid

### Result
- Pass / Fail
- Notes

---

## UAT-004 — Incident link creation
### Goal
Confirm child Incident Link records can be created.

### Steps
1. Open a PIR Review.
2. Add an Incident Link related record.
3. Select an Incident.
4. Save.

### Expected
- Link record saves
- Incident count increments on PIR parent

### Result
- Pass / Fail
- Notes

---

## UAT-005 — Prevent duplicate Incident Link
### Goal
Ensure duplicate links are blocked.

### Steps
1. On the same PIR, create another Incident Link using the same Incident.
2. Save.

### Expected
- Save is blocked
- Error message shown indicating duplicate Incident link

### Result
- Pass / Fail
- Notes

---

## UAT-006 — Change link creation
### Goal
Confirm child Change Link records can be created.

### Steps
1. Open a PIR Review.
2. Add a Change Link.
3. Select a Change Request.
4. Save.

### Expected
- Link record saves successfully

### Result
- Pass / Fail
- Notes

---

## UAT-007 — Prevent duplicate Change Link
### Goal
Ensure duplicate change links are blocked.

### Steps
1. On the same PIR, create another Change Link using the same Change Request.
2. Save.

### Expected
- Save is blocked
- Error message shown indicating duplicate Change Request link

### Result
- Pass / Fail
- Notes

---

## UAT-008 — Evidence creation and rollup
### Goal
Confirm Evidence works and rollups refresh.

### Steps
1. Open a PIR Review.
2. Add an Evidence record.
3. Enter title and evidence type.
4. Save.

### Expected
- Evidence saves
- `evidence_count` increments on PIR parent

### Result
- Pass / Fail
- Notes

---

## UAT-009 — Action item creation and rollup
### Goal
Confirm Action Items work and rollups refresh.

### Steps
1. Open a PIR Review.
2. Add an Action Item.
3. Enter short description, owner, due date.
4. Save.

### Expected
- Action item saves
- `action_count` increments
- `open_action_count` increments

### Result
- Pass / Fail
- Notes

---

## UAT-010 — Action completion timestamp
### Goal
Confirm `completed_at` auto-stamps.

### Steps
1. Open an existing Action Item.
2. Change state to `done`.
3. Save.

### Expected
- `completed_at` is auto-populated
- `open_action_count` decreases on parent PIR

### Result
- Pass / Fail
- Notes

---

## UAT-011 — Review blocked without Incident
### Goal
Confirm lifecycle gating rule works.

### Steps
1. Create a new PIR with no Incident Link.
2. Try to move state to `review`.
3. Save.

### Expected
- Save blocked
- Error says at least one linked Incident is required

### Result
- Pass / Fail
- Notes

---

## UAT-012 — Approval blocked without executive summary
### Goal
Confirm approval gate works.

### Steps
1. Create a PIR.
2. Add at least one Incident Link.
3. Leave executive summary blank.
4. Change state to `approved`.
5. Save.

### Expected
- Save blocked
- Error says executive summary is mandatory before approval

### Result
- Pass / Fail
- Notes

---

## UAT-013 — Approval succeeds with prerequisites met
### Goal
Confirm happy path approval.

### Steps
1. Open PIR.
2. Ensure at least one Incident Link exists.
3. Enter executive summary.
4. Change state to `approved`.
5. Save.

### Expected
- PIR saves in approved state

### Result
- Pass / Fail
- Notes

---

## UAT-014 — Close PIR and protect parent record
### Goal
Confirm closed PIR becomes read-only for non-admins.

### Steps
1. As manager, set PIR state to `closed`.
2. Save.
3. As non-admin, attempt to edit the PIR.

### Expected
- Update is blocked
- Error indicates closed PIR is read-only for non-admins

### Result
- Pass / Fail
- Notes

---

## UAT-015 — Closed parent blocks Action updates
### Goal
Confirm child protections work for Action Items.

### Steps
1. Use a closed PIR.
2. As non-admin, edit a child Action Item.
3. Save.

### Expected
- Update blocked
- Error indicates child records cannot change when parent PIR is closed

### Result
- Pass / Fail
- Notes

---

## UAT-016 — Closed parent blocks Evidence updates
### Goal
Confirm child protections work for Evidence.

### Steps
1. Use a closed PIR.
2. As non-admin, edit a child Evidence record.
3. Save.

### Expected
- Update blocked
- Error indicates child records cannot change when parent PIR is closed

### Result
- Pass / Fail
- Notes

---

## UAT-017 — Closed parent blocks Incident Link updates
### Goal
Confirm child protections work for Incident Links.

### Steps
1. Use a closed PIR.
2. As non-admin, edit a child Incident Link.
3. Save.

### Expected
- Update blocked

### Result
- Pass / Fail
- Notes

---

## UAT-018 — Closed parent blocks Change Link updates
### Goal
Confirm child protections work for Change Links.

### Steps
1. Use a closed PIR.
2. As non-admin, edit a child Change Link.
3. Save.

### Expected
- Update blocked

### Result
- Pass / Fail
- Notes

---

## UAT-019 — Reader role is read-only
### Goal
Confirm reader cannot create/update/delete.

### Steps
1. Log in as user with only `x_openclaw_pir.reader`.
2. Open PIR Review, Evidence, and Action Items.
3. Attempt edit/create actions.

### Expected
- Read access allowed
- Create/update/delete blocked

### Result
- Pass / Fail
- Notes

---

## UAT-020 — Contributor can create child work
### Goal
Confirm contributor path works.

### Steps
1. Log in as user with `x_openclaw_pir.contributor`.
2. Attempt to create Evidence.
3. Attempt to create Action Item.

### Expected
- Evidence creation allowed
- Action creation allowed
- PIR parent write should remain constrained by ACL/business rules

### Result
- Pass / Fail
- Notes

---

## UAT-021 — Rollup regression matrix
### Goal
Confirm all rollups remain accurate after multiple child operations.

### Steps
1. Create PIR.
2. Add 2 Incident Links.
3. Add 2 Evidence records.
4. Add 3 Action Items.
5. Mark 1 Action done.
6. Delete 1 Evidence record.

### Expected
Parent values should reflect actual counts:
- `incident_count = 2`
- `action_count = 3`
- `open_action_count = 2`
- `evidence_count = 1`
- `closure_ready = false`

### Result
- Pass / Fail
- Notes

---

## UAT-022 — Closure readiness flag
### Goal
Confirm closure readiness updates when all actions are complete.

### Steps
1. Use PIR with open Action Items.
2. Mark all remaining Action Items as `done`.
3. Refresh PIR.

### Expected
- `open_action_count = 0`
- `closure_ready = true`

### Result
- Pass / Fail
- Notes

---

## UAT-023 — Module navigation to custom views
### Goal
Confirm menu modules open usable list experiences.

### Steps
1. Open PIR Reviews module.
2. Open Action Items module.
3. Open Evidence module.

### Expected
- Modules open successfully
- List layouts appear with intended columns
- No broken navigation target

### Result
- Pass / Fail
- Notes

---

## 5. Exit criteria
The MVP is considered test-ready when:
- All modules load
- PIR CRUD works
- Approval guards work
- Duplicate link prevention works
- Closed-parent protections work
- Rollups stay accurate
- Reader and Contributor behaviors align with expectations

## 6. Recommended execution order
1. UAT-001 to UAT-004
2. UAT-005 to UAT-010
3. UAT-011 to UAT-018
4. UAT-019 to UAT-023

## 7. Recommended automation candidates for Comet/browser testing
Highest-value scripted checks:
- UAT-001 menu/module visibility
- UAT-003 PIR creation
- UAT-005 duplicate Incident Link prevention
- UAT-010 completed_at stamping
- UAT-011 and UAT-012 approval gates
- UAT-014 to UAT-018 closed-record protection
- UAT-021 rollup regression matrix
