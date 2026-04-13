# Requirement

## Title
Post Incident Review app

## Goal
Create a scoped ServiceNow application to manage post incident reviews with approvals, evidence capture, executive summary, linked incidents/changes, and action tracking.

## Delivery constraints
1. PDI only, non-production
2. Scoped app only
3. Source-driven development with ServiceNow SDK
4. Browser used only for validation, not primary build

## Core records
1. PIR record
2. linked incident record
3. linked change record
4. evidence item
5. action item

## Roles
1. PIR admin
2. PIR manager
3. PIR contributor
4. PIR reader

## Workflow
1. draft
2. review
3. approved
4. closed

## Mandatory rules
1. A PIR must link to at least one incident before approval
2. Executive summary is mandatory before approval
3. Action items must have owners and due dates
4. Closed PIRs are read only except for admins
5. PIR should support one-to-many incident links
6. PIR should support optional one-to-many change links

## MVP outputs needed
1. table design
2. ACL plan
3. form fields
4. flow design
5. ATF coverage
6. deployment notes

## Design preferences
1. Use relationship tables instead of multi-value text fields
2. Keep API surface minimal for MVP
3. Enforce critical rules server-side
4. Keep notifications lightweight
