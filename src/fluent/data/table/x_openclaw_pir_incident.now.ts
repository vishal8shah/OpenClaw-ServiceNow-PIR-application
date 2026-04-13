import {
  BooleanColumn,
  MultiLineTextColumn,
  ReferenceColumn,
  Table,
} from '@servicenow/sdk/core';

export const x_openclaw_pir_incident = Table({
  name: 'x_openclaw_pir_incident',
  label: 'PIR Incident Link',
  display: 'incident',
  audit: true,
  schema: {
    pir: ReferenceColumn({
      label: 'PIR',
      mandatory: true,
      referenceTable: 'x_openclaw_pir_review' as any,
      cascadeRule: 'cascade',
    }),
    incident: ReferenceColumn({
      label: 'Incident',
      mandatory: true,
      referenceTable: 'incident',
    }),
    is_primary: BooleanColumn({
      label: 'Primary',
      default: false,
    }),
    impact_notes: MultiLineTextColumn({
      label: 'Impact Notes',
      maxLength: 2000,
    }),
  },
});
