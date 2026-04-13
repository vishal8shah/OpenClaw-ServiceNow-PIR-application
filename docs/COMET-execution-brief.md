# Comet Execution Brief — OpenClaw PIR UAT

## Objective
Execute the OpenClaw PIR detailed UAT pack against the ServiceNow PDI and return a structured test report with evidence, failures, and recommended fixes.

## Target application
- **Instance:** `https://dev300215.service-now.com`
- **Scope:** `x_openclaw_pir`
- **Application:** `OpenClaw PIR`

## Primary references
- `docs/UAT-test-pack.md`
- `docs/phase-5-summary.md`

## Execution mode
- Prefer **browser-driven validation** inside the instance
- Use the UAT pack as the source of truth
- Execute tests in the recommended order from the UAT pack
- Capture screenshots for failures and major checkpoints

## Mandatory rules
1. Do **not** invent test cases outside the UAT pack unless needed to clarify a failure.
2. If a prerequisite is missing, mark the test as **Blocked** and explain why.
3. For each failed test, include:
   - exact step that failed
   - observed behavior
   - expected behavior
   - screenshot or page evidence if available
   - likely root cause
4. Do not modify production-like data outside the scoped app unless required by the test.
5. Use non-destructive testing where possible.

## Required output format
Return results in this exact structure:

### 1. Summary
- Total Passed
- Total Failed
- Total Blocked
- Total Not Run
- Overall verdict

### 2. Environment
- Instance URL
- App/scope confirmed
- Roles/users used
- Browser/session notes

### 3. Detailed results
For each executed test case:
- Test ID
- Title
- Status: Pass / Fail / Blocked / Not Run
- Steps performed
- Expected result
- Actual result
- Evidence
- Notes

### 4. Defect log
For each defect:
- Defect ID
- Related Test ID(s)
- Severity: Critical / High / Medium / Low
- Description
- Likely component
- Recommended fix

### 5. Retest recommendations
- Immediate fixes to verify first
- Best candidates for automation/regression

## Priority execution order
1. UAT-001 to UAT-004
2. UAT-005 to UAT-010
3. UAT-011 to UAT-018
4. UAT-019 to UAT-023

## Highest-value tests if time is limited
- UAT-001
- UAT-003
- UAT-005
- UAT-010
- UAT-011
- UAT-012
- UAT-014
- UAT-021
- UAT-023

## Notes for likely focus areas
Based on current implementation, pay extra attention to:
- module visibility/navigation under `OpenClaw PIR`
- duplicate prevention on Incident and Change links
- closed-parent protection across child tables
- rollup counter accuracy after create/update/delete activity
- `completed_at` auto-population
- approval gates for incident link and executive summary

## Deliverable expectation
The final output should be detailed enough that a developer can:
1. reproduce each defect
2. map it to a specific rule/module/list/layout area
3. implement a fix without re-running discovery
