import {
  BooleanColumn,
  ChoiceColumn,
  DateTimeColumn,
  MultiLineTextColumn,
  ReferenceColumn,
  StringColumn,
  Table,
  UrlColumn,
} from '@servicenow/sdk/core';

export const x_openclaw_pir_evidence = Table({
  name: 'x_openclaw_pir_evidence',
  label: 'PIR Evidence',
  display: 'title',
  audit: true,
  schema: {
    pir: ReferenceColumn({
      label: 'PIR',
      mandatory: true,
      referenceTable: 'x_openclaw_pir_review' as any,
      cascadeRule: 'cascade',
    }),
    title: StringColumn({
      label: 'Title',
      mandatory: true,
      maxLength: 160,
    }),
    evidence_type: ChoiceColumn({
      label: 'Evidence Type',
      default: 'document',
      choices: {
        log: { label: 'Log' },
        screenshot: { label: 'Screenshot' },
        timeline: { label: 'Timeline' },
        document: { label: 'Document' },
        link: { label: 'Link' },
        other: { label: 'Other' },
      },
    }),
    description: MultiLineTextColumn({
      label: 'Description',
      maxLength: 4000,
    }),
    source_url: UrlColumn({
      label: 'Source URL',
      maxLength: 1000,
    }),
    captured_by: ReferenceColumn({
      label: 'Captured By',
      referenceTable: 'sys_user',
    }),
    captured_at: DateTimeColumn({
      label: 'Captured At',
    }),
    is_sensitive: BooleanColumn({
      label: 'Sensitive',
      default: false,
    }),
  },
});
