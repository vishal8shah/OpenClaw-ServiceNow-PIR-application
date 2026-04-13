import {
  ChoiceColumn,
  DateColumn,
  DateTimeColumn,
  MultiLineTextColumn,
  ReferenceColumn,
  Table,
} from '@servicenow/sdk/core';

export const x_openclaw_pir_action = Table({
  name: 'x_openclaw_pir_action',
  label: 'PIR Action Item',
  display: 'short_description',
  extends: 'task',
  audit: true,
  schema: {
    pir: ReferenceColumn({
      label: 'PIR',
      mandatory: true,
      referenceTable: 'x_openclaw_pir_review' as any,
      cascadeRule: 'cascade',
    }),
    owner: ReferenceColumn({
      label: 'Owner',
      mandatory: true,
      referenceTable: 'sys_user',
    }),
    assignment_group: ReferenceColumn({
      label: 'Assignment Group',
      referenceTable: 'sys_user_group',
    }),
    due_date: DateColumn({
      label: 'Due Date',
      mandatory: true,
    }),
    state: ChoiceColumn({
      label: 'State',
      mandatory: true,
      default: 'open',
      choices: {
        open: { label: 'Open' },
        in_progress: { label: 'In Progress' },
        blocked: { label: 'Blocked' },
        done: { label: 'Done' },
        cancelled: { label: 'Cancelled' },
      },
    }),
    completion_notes: MultiLineTextColumn({
      label: 'Completion Notes',
      maxLength: 4000,
    }),
    completed_at: DateTimeColumn({
      label: 'Completed At',
      readOnly: true,
    }),
  },
});
