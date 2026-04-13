import {
  ChoiceColumn,
  ReferenceColumn,
  Table,
} from '@servicenow/sdk/core';

export const x_openclaw_pir_change = Table({
  name: 'x_openclaw_pir_change',
  label: 'PIR Change Link',
  display: 'change_request',
  audit: true,
  schema: {
    pir: ReferenceColumn({
      label: 'PIR',
      mandatory: true,
      referenceTable: 'x_openclaw_pir_review' as any,
      cascadeRule: 'cascade',
    }),
    change_request: ReferenceColumn({
      label: 'Change Request',
      mandatory: true,
      referenceTable: 'change_request',
    }),
    relationship_type: ChoiceColumn({
      label: 'Relationship Type',
      mandatory: true,
      default: 'related',
      choices: {
        related: { label: 'Related' },
        caused_by: { label: 'Caused By' },
        recovery_change: { label: 'Recovery Change' },
      },
    }),
  },
});
