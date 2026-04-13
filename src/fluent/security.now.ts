import { Role } from '@servicenow/sdk/core';

export const pir_admin = Role({
  name: 'x_openclaw_pir.admin',
  description: 'Full administrative access to the OpenClaw PIR application.',
  scopedAdmin: true,
  grantable: true,
});

export const pir_manager = Role({
  name: 'x_openclaw_pir.manager',
  description: 'Can create, review, and manage PIR records and related work.',
  grantable: true,
});

export const pir_contributor = Role({
  name: 'x_openclaw_pir.contributor',
  description: 'Can contribute evidence and action items to PIR records.',
  grantable: true,
});

export const pir_reader = Role({
  name: 'x_openclaw_pir.reader',
  description: 'Read-only access to PIR records.',
  grantable: true,
});
