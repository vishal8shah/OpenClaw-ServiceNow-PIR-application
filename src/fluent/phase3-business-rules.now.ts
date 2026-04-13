import { BusinessRule } from '@servicenow/sdk/core';

export const pir_review_prevent_non_admin_edit_when_closed = BusinessRule({
  $id: Now.ID['pir-review-prevent-non-admin-edit-when-closed'],
  name: 'PIR Review Prevent Non Admin Edit When Closed',
  table: 'x_openclaw_pir_review' as any,
  when: 'before',
  action: ['update', 'delete'],
  active: true,
  abortAction: true,
  script: `
    (function executeRule(current, previous) {
      var previousState = previous ? previous.getValue('state') : current.getValue('state');
      if (previousState == 'closed' && !gs.hasRole('admin') && !gs.hasRole('x_openclaw_pir.admin')) {
        gs.addErrorMessage('Closed PIR records are read-only for non-admin users.');
        current.setAbortAction(true);
      }
    })(current, previous);
  `,
});

export const pir_child_prevent_change_when_parent_closed = BusinessRule({
  $id: Now.ID['pir-child-prevent-change-when-parent-closed'],
  name: 'PIR Child Prevent Change When Parent Closed',
  table: 'x_openclaw_pir_action' as any,
  when: 'before',
  action: ['insert', 'update', 'delete'],
  active: true,
  abortAction: true,
  script: `
    (function executeRule(current, previous) {
      var pirId = current.getValue('pir') || (previous ? previous.getValue('pir') : '');
      if (!pirId) return;
      var pir = new GlideRecord('x_openclaw_pir_review');
      if (pir.get(pirId) && pir.getValue('state') == 'closed' && !gs.hasRole('admin') && !gs.hasRole('x_openclaw_pir.admin')) {
        gs.addErrorMessage('Child records cannot be changed when the parent PIR is closed.');
        current.setAbortAction(true);
      }
    })(current, previous);
  `,
});

export const pir_rollup_child_counts = BusinessRule({
  $id: Now.ID['pir-rollup-child-counts'],
  name: 'PIR Rollup Child Counts',
  table: 'x_openclaw_pir_incident' as any,
  when: 'after',
  action: ['insert', 'update', 'delete'],
  active: true,
  script: `
    (function executeRule(current, previous) {
      function count(table, field, value, extraFn) {
        var gr = new GlideRecord(table);
        gr.addQuery(field, value);
        if (extraFn) extraFn(gr);
        gr.query();
        return gr.getRowCount();
      }
      var pirId = current.getValue('pir') || (previous ? previous.getValue('pir') : '');
      if (!pirId) return;
      var pir = new GlideRecord('x_openclaw_pir_review');
      if (!pir.get(pirId)) return;
      pir.setWorkflow(false);
      pir.setValue('incident_count', count('x_openclaw_pir_incident', 'pir', pirId));
      pir.setValue('action_count', count('x_openclaw_pir_action', 'pir', pirId));
      pir.setValue('open_action_count', count('x_openclaw_pir_action', 'pir', pirId, function(gr) {
        gr.addQuery('state', 'NOT IN', 'done,cancelled');
      }));
      pir.setValue('evidence_count', count('x_openclaw_pir_evidence', 'pir', pirId));
      pir.update();
    })(current, previous);
  `,
});
