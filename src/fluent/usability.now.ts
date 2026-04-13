import { List, Record } from '@servicenow/sdk/core';

export const openclaw_pir_view = Record({
  $id: Now.ID['openclaw-pir-view'],
  table: 'sys_ui_view',
  data: {
    name: 'openclaw_pir',
    title: 'OpenClaw PIR',
  },
});

export const pir_review_list = List({
  table: 'x_openclaw_pir_review',
  view: openclaw_pir_view,
  columns: [
    { element: 'number', position: 0 },
    { element: 'short_description', position: 1 },
    { element: 'state', position: 2 },
    { element: 'review_owner', position: 3 },
    { element: 'review_due_date', position: 4 },
    { element: 'incident_count', position: 5 },
    { element: 'open_action_count', position: 6 },
    { element: 'sys_updated_on', position: 7 },
  ],
});

export const pir_action_list = List({
  table: 'x_openclaw_pir_action',
  view: openclaw_pir_view,
  columns: [
    { element: 'number', position: 0 },
    { element: 'short_description', position: 1 },
    { element: 'state', position: 2 },
    { element: 'owner', position: 3 },
    { element: 'due_date', position: 4 },
    { element: 'pir', position: 5 },
    { element: 'sys_updated_on', position: 6 },
  ],
});

export const pir_evidence_list = List({
  table: 'x_openclaw_pir_evidence',
  view: openclaw_pir_view,
  columns: [
    { element: 'title', position: 0 },
    { element: 'evidence_type', position: 1 },
    { element: 'pir', position: 2 },
    { element: 'captured_by', position: 3 },
    { element: 'captured_at', position: 4 },
    { element: 'is_sensitive', position: 5 },
  ],
});

export const pir_incident_related_list = List({
  table: 'x_openclaw_pir_incident',
  parent: 'x_openclaw_pir_review',
  view: openclaw_pir_view,
  columns: [
    { element: 'incident', position: 0 },
    { element: 'is_primary', position: 1 },
    { element: 'impact_notes', position: 2 },
    { element: 'sys_updated_on', position: 3 },
  ],
});

export const pir_change_related_list = List({
  table: 'x_openclaw_pir_change',
  parent: 'x_openclaw_pir_review',
  view: openclaw_pir_view,
  columns: [
    { element: 'change_request', position: 0 },
    { element: 'relationship_type', position: 1 },
    { element: 'sys_updated_on', position: 2 },
  ],
});

export const pir_evidence_related_list = List({
  table: 'x_openclaw_pir_evidence',
  parent: 'x_openclaw_pir_review',
  view: openclaw_pir_view,
  columns: [
    { element: 'title', position: 0 },
    { element: 'evidence_type', position: 1 },
    { element: 'captured_by', position: 2 },
    { element: 'captured_at', position: 3 },
    { element: 'is_sensitive', position: 4 },
  ],
});

export const pir_action_related_list = List({
  table: 'x_openclaw_pir_action',
  parent: 'x_openclaw_pir_review',
  view: openclaw_pir_view,
  columns: [
    { element: 'short_description', position: 0 },
    { element: 'state', position: 1 },
    { element: 'owner', position: 2 },
    { element: 'due_date', position: 3 },
    { element: 'completed_at', position: 4 },
  ],
});
