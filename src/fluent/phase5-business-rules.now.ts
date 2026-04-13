import { BusinessRule } from '@servicenow/sdk/core';

const rollupScript = `
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
    pir.setValue('closure_ready', count('x_openclaw_pir_action', 'pir', pirId, function(gr) {
      gr.addQuery('state', 'NOT IN', 'done,cancelled');
    }) === 0);
    pir.update();
  })(current, previous);
`;

const closedParentScript = `
  (function executeRule(current, previous) {
    var pirId = current.getValue('pir') || (previous ? previous.getValue('pir') : '');
    if (!pirId) return;
    var pir = new GlideRecord('x_openclaw_pir_review');
    if (pir.get(pirId) && pir.getValue('state') == 'closed' && !gs.hasRole('admin') && !gs.hasRole('x_openclaw_pir.admin')) {
      gs.addErrorMessage('Child records cannot be changed when the parent PIR is closed.');
      current.setAbortAction(true);
    }
  })(current, previous);
`;

export const pir_rollup_counts_from_action = BusinessRule({
  $id: Now.ID['pir-rollup-counts-from-action'],
  name: 'PIR Rollup Counts From Action',
  table: 'x_openclaw_pir_action' as any,
  when: 'after',
  action: ['insert', 'update', 'delete'],
  active: true,
  script: rollupScript,
});

export const pir_rollup_counts_from_evidence = BusinessRule({
  $id: Now.ID['pir-rollup-counts-from-evidence'],
  name: 'PIR Rollup Counts From Evidence',
  table: 'x_openclaw_pir_evidence' as any,
  when: 'after',
  action: ['insert', 'update', 'delete'],
  active: true,
  script: rollupScript,
});

export const pir_rollup_counts_from_change = BusinessRule({
  $id: Now.ID['pir-rollup-counts-from-change'],
  name: 'PIR Rollup Counts From Change',
  table: 'x_openclaw_pir_change' as any,
  when: 'after',
  action: ['insert', 'update', 'delete'],
  active: true,
  script: rollupScript,
});

export const pir_incident_prevent_duplicate_link = BusinessRule({
  $id: Now.ID['pir-incident-prevent-duplicate-link'],
  name: 'PIR Incident Prevent Duplicate Link',
  table: 'x_openclaw_pir_incident' as any,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  abortAction: true,
  script: `
    (function executeRule(current, previous) {
      if (!current.getValue('pir') || !current.getValue('incident')) return;
      var gr = new GlideRecord('x_openclaw_pir_incident');
      gr.addQuery('pir', current.getValue('pir'));
      gr.addQuery('incident', current.getValue('incident'));
      gr.addQuery('sys_id', '!=', current.getUniqueValue());
      gr.setLimit(1);
      gr.query();
      if (gr.next()) {
        gs.addErrorMessage('This Incident is already linked to the selected PIR.');
        current.setAbortAction(true);
      }
    })(current, previous);
  `,
});

export const pir_change_prevent_duplicate_link = BusinessRule({
  $id: Now.ID['pir-change-prevent-duplicate-link'],
  name: 'PIR Change Prevent Duplicate Link',
  table: 'x_openclaw_pir_change' as any,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  abortAction: true,
  script: `
    (function executeRule(current, previous) {
      if (!current.getValue('pir') || !current.getValue('change_request')) return;
      var gr = new GlideRecord('x_openclaw_pir_change');
      gr.addQuery('pir', current.getValue('pir'));
      gr.addQuery('change_request', current.getValue('change_request'));
      gr.addQuery('sys_id', '!=', current.getUniqueValue());
      gr.setLimit(1);
      gr.query();
      if (gr.next()) {
        gs.addErrorMessage('This Change Request is already linked to the selected PIR.');
        current.setAbortAction(true);
      }
    })(current, previous);
  `,
});

export const pir_incident_prevent_change_when_parent_closed = BusinessRule({
  $id: Now.ID['pir-incident-prevent-change-when-parent-closed'],
  name: 'PIR Incident Prevent Change When Parent Closed',
  table: 'x_openclaw_pir_incident' as any,
  when: 'before',
  action: ['insert', 'update', 'delete'],
  active: true,
  abortAction: true,
  script: closedParentScript,
});

export const pir_change_prevent_change_when_parent_closed = BusinessRule({
  $id: Now.ID['pir-change-prevent-change-when-parent-closed'],
  name: 'PIR Change Prevent Change When Parent Closed',
  table: 'x_openclaw_pir_change' as any,
  when: 'before',
  action: ['insert', 'update', 'delete'],
  active: true,
  abortAction: true,
  script: closedParentScript,
});

export const pir_evidence_prevent_change_when_parent_closed = BusinessRule({
  $id: Now.ID['pir-evidence-prevent-change-when-parent-closed'],
  name: 'PIR Evidence Prevent Change When Parent Closed',
  table: 'x_openclaw_pir_evidence' as any,
  when: 'before',
  action: ['insert', 'update', 'delete'],
  active: true,
  abortAction: true,
  script: closedParentScript,
});
