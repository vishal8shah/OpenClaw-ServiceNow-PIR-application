import { Acl } from '@servicenow/sdk/core';
import { pir_admin, pir_manager, pir_contributor, pir_reader } from './security.now';

const allPirRoles = [pir_admin, pir_manager, pir_contributor, pir_reader];
const managerRoles = [pir_admin, pir_manager];
const contributorRoles = [pir_admin, pir_manager, pir_contributor];

export const pir_review_read = Acl({
  $id: Now.ID['pir-review-read'],
  type: 'record',
  table: 'x_openclaw_pir_review' as any,
  operation: 'read',
  roles: allPirRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_review_create = Acl({
  $id: Now.ID['pir-review-create'],
  type: 'record',
  table: 'x_openclaw_pir_review' as any,
  operation: 'create',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_review_write = Acl({
  $id: Now.ID['pir-review-write'],
  type: 'record',
  table: 'x_openclaw_pir_review' as any,
  operation: 'write',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_review_delete = Acl({
  $id: Now.ID['pir-review-delete'],
  type: 'record',
  table: 'x_openclaw_pir_review' as any,
  operation: 'delete',
  roles: [pir_admin],
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_incident_read = Acl({
  $id: Now.ID['pir-incident-read'],
  type: 'record',
  table: 'x_openclaw_pir_incident' as any,
  operation: 'read',
  roles: allPirRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_incident_create = Acl({
  $id: Now.ID['pir-incident-create'],
  type: 'record',
  table: 'x_openclaw_pir_incident' as any,
  operation: 'create',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_incident_write = Acl({
  $id: Now.ID['pir-incident-write'],
  type: 'record',
  table: 'x_openclaw_pir_incident' as any,
  operation: 'write',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_incident_delete = Acl({
  $id: Now.ID['pir-incident-delete'],
  type: 'record',
  table: 'x_openclaw_pir_incident' as any,
  operation: 'delete',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_change_read = Acl({
  $id: Now.ID['pir-change-read'],
  type: 'record',
  table: 'x_openclaw_pir_change' as any,
  operation: 'read',
  roles: allPirRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_change_create = Acl({
  $id: Now.ID['pir-change-create'],
  type: 'record',
  table: 'x_openclaw_pir_change' as any,
  operation: 'create',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_change_write = Acl({
  $id: Now.ID['pir-change-write'],
  type: 'record',
  table: 'x_openclaw_pir_change' as any,
  operation: 'write',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_change_delete = Acl({
  $id: Now.ID['pir-change-delete'],
  type: 'record',
  table: 'x_openclaw_pir_change' as any,
  operation: 'delete',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_evidence_read = Acl({
  $id: Now.ID['pir-evidence-read'],
  type: 'record',
  table: 'x_openclaw_pir_evidence' as any,
  operation: 'read',
  roles: allPirRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_evidence_create = Acl({
  $id: Now.ID['pir-evidence-create'],
  type: 'record',
  table: 'x_openclaw_pir_evidence' as any,
  operation: 'create',
  roles: contributorRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_evidence_write = Acl({
  $id: Now.ID['pir-evidence-write'],
  type: 'record',
  table: 'x_openclaw_pir_evidence' as any,
  operation: 'write',
  roles: contributorRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_evidence_delete = Acl({
  $id: Now.ID['pir-evidence-delete'],
  type: 'record',
  table: 'x_openclaw_pir_evidence' as any,
  operation: 'delete',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_action_read = Acl({
  $id: Now.ID['pir-action-read'],
  type: 'record',
  table: 'x_openclaw_pir_action' as any,
  operation: 'read',
  roles: allPirRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_action_create = Acl({
  $id: Now.ID['pir-action-create'],
  type: 'record',
  table: 'x_openclaw_pir_action' as any,
  operation: 'create',
  roles: contributorRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_action_write = Acl({
  $id: Now.ID['pir-action-write'],
  type: 'record',
  table: 'x_openclaw_pir_action' as any,
  operation: 'write',
  roles: contributorRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});

export const pir_action_delete = Acl({
  $id: Now.ID['pir-action-delete'],
  type: 'record',
  table: 'x_openclaw_pir_action' as any,
  operation: 'delete',
  roles: managerRoles,
  active: true,
  adminOverrides: true,
  decisionType: 'allow',
});
