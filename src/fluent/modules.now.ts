import { Record } from '@servicenow/sdk/core';
import { pir_menu } from './navigation.now';
import { pir_admin, pir_manager, pir_contributor, pir_reader } from './security.now';

const allPirRoles = [pir_admin, pir_manager, pir_contributor, pir_reader];
const editPirRoles = [pir_admin, pir_manager, pir_contributor];

export const module_pir_reviews = Record({
  $id: Now.ID['module-pir-reviews'],
  table: 'sys_app_module',
  data: {
    title: 'PIR Reviews',
    application: pir_menu as any,
    active: true,
    order: 100,
    link_type: 'LIST',
    name: 'x_openclaw_pir_review',
    roles: allPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'PIR Reviews',
    hint: 'View all post incident reviews',
  },
});

export const module_new_pir_review = Record({
  $id: Now.ID['module-new-pir-review'],
  table: 'sys_app_module',
  data: {
    title: 'New PIR Review',
    application: pir_menu as any,
    active: true,
    order: 110,
    link_type: 'NEW',
    name: 'x_openclaw_pir_review',
    roles: editPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'New PIR',
    hint: 'Create a new post incident review',
  },
});

export const module_action_items = Record({
  $id: Now.ID['module-action-items'],
  table: 'sys_app_module',
  data: {
    title: 'Action Items',
    application: pir_menu as any,
    active: true,
    order: 200,
    link_type: 'LIST',
    name: 'x_openclaw_pir_action',
    roles: allPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'Action Items',
    hint: 'View PIR action items',
  },
});

export const module_new_action_item = Record({
  $id: Now.ID['module-new-action-item'],
  table: 'sys_app_module',
  data: {
    title: 'New Action Item',
    application: pir_menu as any,
    active: true,
    order: 210,
    link_type: 'NEW',
    name: 'x_openclaw_pir_action',
    roles: editPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'New Action',
    hint: 'Create a new PIR action item',
  },
});

export const module_evidence = Record({
  $id: Now.ID['module-evidence'],
  table: 'sys_app_module',
  data: {
    title: 'Evidence',
    application: pir_menu as any,
    active: true,
    order: 300,
    link_type: 'LIST',
    name: 'x_openclaw_pir_evidence',
    roles: allPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'Evidence',
    hint: 'View PIR evidence items',
    view_name: 'openclaw_pir',
  },
});

export const module_incident_links = Record({
  $id: Now.ID['module-incident-links'],
  table: 'sys_app_module',
  data: {
    title: 'Incident Links',
    application: pir_menu as any,
    active: true,
    order: 400,
    link_type: 'LIST',
    name: 'x_openclaw_pir_incident',
    roles: allPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'Incident Links',
    hint: 'View PIR incident links',
  },
});

export const module_change_links = Record({
  $id: Now.ID['module-change-links'],
  table: 'sys_app_module',
  data: {
    title: 'Change Links',
    application: pir_menu as any,
    active: true,
    order: 500,
    link_type: 'LIST',
    name: 'x_openclaw_pir_change',
    roles: allPirRoles as any,
    override_menu_roles: false,
    mobile_title: 'Change Links',
    hint: 'View PIR change links',
  },
});
