import { BusinessRule } from '@servicenow/sdk/core';

export const pir_require_incident_before_approval = BusinessRule({
  $id: Now.ID['pir-require-incident-before-approval'],
  name: 'PIR Require Incident Before Approval',
  table: 'x_openclaw_pir_review' as any,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  abortAction: true,
  condition: "current.state == 'approved' || current.state == 'review'",
  script: `
    (function executeRule(current, previous) {
      var linkGr = new GlideRecord('x_openclaw_pir_incident');
      linkGr.addQuery('pir', current.getUniqueValue());
      linkGr.setLimit(1);
      linkGr.query();
      if (!linkGr.next()) {
        gs.addErrorMessage('At least one linked Incident is required before moving a PIR to Review or Approved.');
        current.setAbortAction(true);
      }
    })(current, previous);
  `,
});

export const pir_require_exec_summary_before_approval = BusinessRule({
  $id: Now.ID['pir-require-exec-summary-before-approval'],
  name: 'PIR Require Executive Summary Before Approval',
  table: 'x_openclaw_pir_review' as any,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  abortAction: true,
  condition: "current.state == 'approved'",
  script: `
    (function executeRule(current, previous) {
      var summary = current.getValue('executive_summary');
      if (!summary || (summary + '').trim() === '') {
        gs.addErrorMessage('Executive Summary is mandatory before approval.');
        current.setAbortAction(true);
      }
    })(current, previous);
  `,
});

export const pir_action_stamp_completed_at = BusinessRule({
  $id: Now.ID['pir-action-stamp-completed-at'],
  name: 'PIR Action Stamp Completed At',
  table: 'x_openclaw_pir_action' as any,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  script: `
    (function executeRule(current, previous) {
      var state = current.getValue('state');
      if (state == 'done' && !current.getValue('completed_at')) {
        current.setValue('completed_at', gs.nowDateTime());
      }
      if (state != 'done' && current.getValue('completed_at')) {
        current.setValue('completed_at', '');
      }
    })(current, previous);
  `,
});
