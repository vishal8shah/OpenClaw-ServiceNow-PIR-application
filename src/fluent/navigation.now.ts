import { ApplicationMenu } from '@servicenow/sdk/core';
import { pir_admin, pir_manager, pir_contributor, pir_reader } from './security.now';

export const pir_menu = ApplicationMenu({
  $id: Now.ID['openclaw-pir-menu'],
  title: 'OpenClaw PIR',
  hint: 'Post Incident Review workspace',
  description: 'Application menu for post incident reviews, evidence, and action tracking.',
  roles: [pir_admin, pir_manager, pir_contributor, pir_reader],
  active: true,
  order: 200,
});
