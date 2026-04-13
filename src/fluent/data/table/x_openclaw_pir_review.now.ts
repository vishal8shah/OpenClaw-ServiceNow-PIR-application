import {
  BooleanColumn,
  ChoiceColumn,
  DateColumn,
  DateTimeColumn,
  IntegerColumn,
  MultiLineTextColumn,
  ReferenceColumn,
  StringColumn,
  Table,
} from '@servicenow/sdk/core';

export const x_openclaw_pir_review = Table({
  name: 'x_openclaw_pir_review',
  extends: 'task',
  label: 'Post Incident Review',
  display: 'short_description',
  audit: true,
  allowWebServiceAccess: true,
  schema: {
    state: ChoiceColumn({
      label: 'State',
      mandatory: true,
      default: 'draft',
      choices: {
        draft: { label: 'Draft' },
        review: { label: 'Review' },
        approved: { label: 'Approved' },
        closed: { label: 'Closed' },
      },
    }),
    review_owner: ReferenceColumn({
      label: 'Review Owner',
      referenceTable: 'sys_user',
    }),
    incident_count: IntegerColumn({
      label: 'Incident Count',
      readOnly: true,
      default: 0,
    }),
    action_count: IntegerColumn({
      label: 'Action Count',
      readOnly: true,
      default: 0,
    }),
    open_action_count: IntegerColumn({
      label: 'Open Action Count',
      readOnly: true,
      default: 0,
    }),
    evidence_count: IntegerColumn({
      label: 'Evidence Count',
      readOnly: true,
      default: 0,
    }),
    executive_summary: MultiLineTextColumn({
      label: 'Executive Summary',
      maxLength: 4000,
    }),
    detailed_findings: MultiLineTextColumn({
      label: 'Detailed Findings',
      maxLength: 8000,
    }),
    root_cause_summary: MultiLineTextColumn({
      label: 'Root Cause Summary',
      maxLength: 4000,
    }),
    customer_impact: MultiLineTextColumn({
      label: 'Customer Impact',
      maxLength: 4000,
    }),
    service_impact: MultiLineTextColumn({
      label: 'Service Impact',
      maxLength: 4000,
    }),
    started_at: DateTimeColumn({
      label: 'Started At',
    }),
    restored_at: DateTimeColumn({
      label: 'Restored At',
    }),
    review_due_date: DateColumn({
      label: 'Review Due Date',
    }),
    approved_by: ReferenceColumn({
      label: 'Approved By',
      referenceTable: 'sys_user',
    }),
    approved_at: DateTimeColumn({
      label: 'Approved At',
      readOnly: true,
    }),
    closed_at: DateTimeColumn({
      label: 'Closed At',
      readOnly: true,
    }),
    pir_code: StringColumn({
      label: 'PIR Code',
      maxLength: 80,
      unique: true,
    }),
    closure_ready: BooleanColumn({
      label: 'Closure Ready',
      default: false,
      readOnly: true,
    }),
  },
});
