import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '221a7e3c72814ba4aeac76aa60fdd409'
                    }
                    'module-action-items': {
                        table: 'sys_app_module'
                        id: 'c12ecfa938bb4bb9980971e77ed6e93b'
                    }
                    'module-change-links': {
                        table: 'sys_app_module'
                        id: '3cfa7c9d82f744ad99705fc0b21a8725'
                    }
                    'module-evidence': {
                        table: 'sys_app_module'
                        id: '2d6608767e624fbf8d0fc93c7d3a7576'
                    }
                    'module-incident-links': {
                        table: 'sys_app_module'
                        id: '933fd220afe64de29d2ea3da00a26fdf'
                    }
                    'module-new-action-item': {
                        table: 'sys_app_module'
                        id: '8a1700d5504e4f8c961ffb1dcc5fd488'
                    }
                    'module-new-pir-review': {
                        table: 'sys_app_module'
                        id: '1b00aa0dbfff4e398a6e55cefa4a84e1'
                    }
                    'module-pir-reviews': {
                        table: 'sys_app_module'
                        id: '84ceb35e3ec94b079e4e747b0d1d6b98'
                    }
                    'openclaw-pir-menu': {
                        table: 'sys_app_application'
                        id: 'bd32d1c642a34a3fae6b89b3dffc3729'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7b54d244b5614fea88490548d7fd45e9'
                    }
                    'pir-action-create': {
                        table: 'sys_security_acl'
                        id: '76aa8405858c4ddd9ae43ce8da3f6318'
                    }
                    'pir-action-delete': {
                        table: 'sys_security_acl'
                        id: '578e80f9d0a74a81b65d893665ae1c45'
                    }
                    'pir-action-read': {
                        table: 'sys_security_acl'
                        id: 'f24a464c29b64c62afe7ac7ad226b499'
                    }
                    'pir-action-stamp-completed-at': {
                        table: 'sys_script'
                        id: '9b89078dabd940b09612910b40d2e449'
                    }
                    'pir-action-write': {
                        table: 'sys_security_acl'
                        id: '11fa49d1ecb24b58b01632cb7aff8d90'
                    }
                    'pir-change-create': {
                        table: 'sys_security_acl'
                        id: '814152d01952455480ca8e1d006b7e2c'
                    }
                    'pir-change-delete': {
                        table: 'sys_security_acl'
                        id: 'f0501eeb1d0246adb6817c0c65c344c4'
                    }
                    'pir-change-prevent-change-when-parent-closed': {
                        table: 'sys_script'
                        id: 'b989f1fea744463494efc8062c173b33'
                    }
                    'pir-change-prevent-duplicate-link': {
                        table: 'sys_script'
                        id: '46addeacb9f34b70be4579817a3161a5'
                    }
                    'pir-change-read': {
                        table: 'sys_security_acl'
                        id: 'b6fb61c9304647f5ac854cad3f99d5b4'
                    }
                    'pir-change-write': {
                        table: 'sys_security_acl'
                        id: '63b11dd3f58e44aface6f8886089ed02'
                    }
                    'pir-child-prevent-change-when-parent-closed': {
                        table: 'sys_script'
                        id: '953a5c4d53a5483eb037890797ca6b66'
                    }
                    'pir-evidence-create': {
                        table: 'sys_security_acl'
                        id: 'ee3d2cd9f0c44ce6b4f259b428e6190e'
                    }
                    'pir-evidence-delete': {
                        table: 'sys_security_acl'
                        id: 'a1d265864b254248b2a8f52325135473'
                    }
                    'pir-evidence-prevent-change-when-parent-closed': {
                        table: 'sys_script'
                        id: '8e009128f5a646e197f48a733c901bd2'
                    }
                    'pir-evidence-read': {
                        table: 'sys_security_acl'
                        id: 'b60bf189b1804966ab06bfedd226a43d'
                    }
                    'pir-evidence-write': {
                        table: 'sys_security_acl'
                        id: '88c08ea664324fe2a4ebe2875368d6ae'
                    }
                    'pir-incident-create': {
                        table: 'sys_security_acl'
                        id: '21354121c32245b48bae74221e403eb6'
                    }
                    'pir-incident-delete': {
                        table: 'sys_security_acl'
                        id: 'a9494fe3ba71479d9293993f034a6f63'
                    }
                    'pir-incident-prevent-change-when-parent-closed': {
                        table: 'sys_script'
                        id: '9d54c2dd64ab40af8ffe6c3387d5bcb2'
                    }
                    'pir-incident-prevent-duplicate-link': {
                        table: 'sys_script'
                        id: '0df80a3c676e48e0805be05f383f4b18'
                    }
                    'pir-incident-read': {
                        table: 'sys_security_acl'
                        id: '312fb196c7ad4431b536358c11061ab2'
                    }
                    'pir-incident-write': {
                        table: 'sys_security_acl'
                        id: '1a1d30e00f434c0eb9c1efd261e69fec'
                    }
                    'pir-require-exec-summary-before-approval': {
                        table: 'sys_script'
                        id: '4988975edd204e9496854a282bbe5b02'
                    }
                    'pir-require-incident-before-approval': {
                        table: 'sys_script'
                        id: '02b2957bf10b4d88ac64f3273b96fb41'
                    }
                    'pir-review-create': {
                        table: 'sys_security_acl'
                        id: 'acd98fd4a0154aceab7a9c6b9b172cdc'
                    }
                    'pir-review-delete': {
                        table: 'sys_security_acl'
                        id: 'cb012d97813a4f129701c8e837280252'
                    }
                    'pir-review-prevent-non-admin-edit-when-closed': {
                        table: 'sys_script'
                        id: '14b22dba2e0c4005b01c2b1802af424b'
                    }
                    'pir-review-read': {
                        table: 'sys_security_acl'
                        id: '4e62e1babea4444c96d4d577403e4e21'
                    }
                    'pir-review-write': {
                        table: 'sys_security_acl'
                        id: 'b1be472ac0954e75ad1e350522e4a809'
                    }
                    'pir-rollup-child-counts': {
                        table: 'sys_script'
                        id: '11f3affd6d6b4420b890a9d08de91d58'
                    }
                    'pir-rollup-counts-from-action': {
                        table: 'sys_script'
                        id: '7bd6ac226ee54219ad271991ae57b410'
                    }
                    'pir-rollup-counts-from-change': {
                        table: 'sys_script'
                        id: '6e4bdb927d3f4b3fa1543c33bdaa5200'
                    }
                    'pir-rollup-counts-from-evidence': {
                        table: 'sys_script'
                        id: '738f672d902e4a6e8ede325c7f80c1c7'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '0107453f4114475f9d6a1078010a00e3'
                        key: {
                            name: 'x_openclaw_pir_change'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0123abf540634640ae90aed3a3282838'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            value: 'timeline'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03d5360fc9e74b01a3a67b4a590d5805'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'completion_notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04e418d417cf43fc83ac2ee0cd495b7c'
                        key: {
                            sys_security_acl: '4e62e1babea4444c96d4d577403e4e21'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04f7b5db006a4778996338bceedbd228'
                        key: {
                            sys_security_acl: '11fa49d1ecb24b58b01632cb7aff8d90'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05322d7f06a948d79915052d846eb38e'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'open_action_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07d28422c5e340a0b9871b57c5907ff7'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07df27137e514573b9d0ddde4b3da929'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'approved_at'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '08ff4d82e00e449dbca544845f0e82e4'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'incident_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b62868f1cbf4312bd0afbf86c173d7d'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'restored_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0d5cf07ac2364f35ba996cd1de0ca229'
                        key: {
                            sys_security_acl: '21354121c32245b48bae74221e403eb6'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d7abd9bba2f48d48239e99342dd125f'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'executive_summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ead37a5ff14441bb30e8c593b559b22'
                        key: {
                            sys_security_acl: 'acd98fd4a0154aceab7a9c6b9b172cdc'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11fc6a78b52d42c6864a3d7864ade7dd'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'started_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '13755901d90c4b3e8c2a0f63131aa709'
                        key: {
                            sys_security_acl: '814152d01952455480ca8e1d006b7e2c'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '14fddd62233f4f3083b8239e3aa06518'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1608bef6e7714a85b5f9f7e4579d4e8a'
                        key: {
                            sys_security_acl: 'b60bf189b1804966ab06bfedd226a43d'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16f3433f36a942f3a28b32af85cbdacf'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '172161e198fd40e2bf402d10fff5d06e'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'detailed_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17a8b152267b4b31859c1cce4cbfaad2'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a98083d0c3d42aaa4f912c17afddaf8'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            value: 'log'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1bbd227a85d344beadbf19ff86c83994'
                        key: {
                            sys_security_acl: 'f24a464c29b64c62afe7ac7ad226b499'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1dfefd5e9132470eac4418e37a405e14'
                        key: {
                            sys_security_acl: 'b6fb61c9304647f5ac854cad3f99d5b4'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '235858a6ddc04bc78151215080c8742e'
                        key: {
                            list_id: {
                                id: '612d6d0e38334f9d82bdd2443d7a6f29'
                                key: {
                                    name: 'x_openclaw_pir_incident'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '25fb7040d3a74d208e710079fb09acc9'
                        key: {
                            sys_security_acl: '312fb196c7ad4431b536358c11061ab2'
                            sys_user_role: {
                                id: 'bb85327867b0445092f38f96af8cc21d'
                                key: {
                                    name: 'x_openclaw_pir.reader'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '282d926316f841b495bf8d61740e43d0'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'pir'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '292b46a177b549e5b7b75deb102f271f'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'relationship_type'
                            value: 'related'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2bec2a5214924a5e8d629412d8decf2e'
                        key: {
                            list_id: {
                                id: 'f798a86e667a49deb2f27e44d2023ad0'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'captured_at'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2c2308b75b224fa680ed72038e915a27'
                        key: {
                            list_id: {
                                id: 'af7c577dae794534ad19e820aac7f262'
                                key: {
                                    name: 'x_openclaw_pir_change'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'relationship_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2fb505c979494626b47d2ac5bcac4436'
                        key: {
                            list_id: {
                                id: 'd25cc13789124026a8a90f7208d0a1d9'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'captured_by'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3014aa80d30d46fe8198c8858edefc66'
                        key: {
                            list_id: {
                                id: 'd25cc13789124026a8a90f7208d0a1d9'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'evidence_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '316de43f24114cd294b6c6274c4e3be7'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'relationship_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '31996394aae2400b9ee2168e2d13f4bd'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'open_action_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36d406f1bb994343af87ec8f360ab1c5'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '374f80313e93407c8e1e7ce8c1ef5f5a'
                        key: {
                            sys_security_acl: 'f0501eeb1d0246adb6817c0c65c344c4'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '38d31ab2bdfe43b099b2f2d8bca8f1e2'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3bdde3480f5d4bb4b087e17902605d6e'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'service_impact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cedfc36ed3a4a56bddd9c703213b1db'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d1c7cfa8a9a4e0ca2bdf28a0201f30f'
                        key: {
                            sys_security_acl: '76aa8405858c4ddd9ae43ce8da3f6318'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3dd742d548ee45c39e7b0f9975efdcaa'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e4d1d83122245e7a1606a1fb8dc11b7'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e8343478eb8422992d49265201710a4'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'pir_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3f01afbcdce049c79fc42a33e5b766f8'
                        key: {
                            sys_security_acl: '4e62e1babea4444c96d4d577403e4e21'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3f0943c2552f43b6b2995b0368ab9b69'
                        key: {
                            name: 'x_openclaw_pir_action'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40065fd427d746a8a2fe6417860ac675'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                            value: 'blocked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42968f46d5c14a72bafee274d466af04'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'customer_impact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42d457ebb07c49b580ef824c1777a846'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '430a9672b13e4ac3aeb2b04045c39e15'
                        key: {
                            sys_security_acl: '312fb196c7ad4431b536358c11061ab2'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4380c5edba9a46d1b66dc54a7fe7577e'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'closure_ready'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43c2f62ad51d46249da793388619bc2d'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '455f25ecdcd2490ea3f3333a2b3286e7'
                        key: {
                            sys_security_acl: '312fb196c7ad4431b536358c11061ab2'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '45b3c26bd2ad4da780cd88ae824f3bce'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '473de6fc63c740bf8cd6955124965bbb'
                        key: {
                            sys_security_acl: '312fb196c7ad4431b536358c11061ab2'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a014bf0a6e24e6aa413a268d62f2159'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '4c16fbf4e59e4317bcae582ab0a1b3ae'
                        key: {
                            name: 'x_openclaw_pir_action'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_openclaw_pir_review'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4e0ef2fe4eee4efeb349dc5dcd5243ad'
                        key: {
                            list_id: {
                                id: '612d6d0e38334f9d82bdd2443d7a6f29'
                                key: {
                                    name: 'x_openclaw_pir_incident'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'incident'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4e5c4482ed2c4322af5f165c31e88c88'
                        key: {
                            list_id: {
                                id: '612d6d0e38334f9d82bdd2443d7a6f29'
                                key: {
                                    name: 'x_openclaw_pir_incident'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'is_primary'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4edf7fad76f04a9494c3fed5c7894927'
                        key: {
                            sys_security_acl: '88c08ea664324fe2a4ebe2875368d6ae'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fb1f3c122654726a689f6c75cea81f5'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5181fac86275469cbd833f088d31c5b4'
                        key: {
                            list_id: {
                                id: '4c16fbf4e59e4317bcae582ab0a1b3ae'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '522d953ebab64f80abd211a6fe55047f'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'impact_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52b086aee7f048e9b5e5fa639d2723da'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '531285ff323d4d69a16d9938812dc9f5'
                        key: {
                            sys_security_acl: 'b60bf189b1804966ab06bfedd226a43d'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5375a6d58dcc431595da1c5d6b01e9f9'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '539f575cb93a43a98350a88b6a7b4ef2'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5439572517784b9c9b49f1ff669ef43e'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '553beea16b4742d48b98f3a1a8d08584'
                        key: {
                            sys_security_acl: 'b1be472ac0954e75ad1e350522e4a809'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '56790db5ce314a9d8aa06403299bd644'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'relationship_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5779d8bdc00f4199ba47b306fd60da01'
                        key: {
                            name: 'x_openclaw_pir_incident'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '57db62c5ee404bf299ff38492b7004e4'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'review_due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59366e5a04a54cdfa30c5371183b1ac1'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'incident_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '59f33cfab8b94e6fbfa08475c72bf6d3'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a0a14c5b5174665ac594be9c83c4baa'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5b1d688dc23d439588798a39a2c76a95'
                        key: {
                            sys_security_acl: 'f24a464c29b64c62afe7ac7ad226b499'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b3f6510bb5e4f5f9df0d25b96c0a947'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'change_request'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5ca26e3d2c4e4556893adc3b916fc68d'
                        key: {
                            list_id: {
                                id: '4c16fbf4e59e4317bcae582ab0a1b3ae'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'completed_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d983712df564ac6895204b67e1348ca'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'incident_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f357d779bc3498a86c4fddc5984b2d6'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'pir'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ff6f1ca13104b7eaeb791a8c8ba04a3'
                        key: {
                            sys_security_acl: '63b11dd3f58e44aface6f8886089ed02'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '612d6d0e38334f9d82bdd2443d7a6f29'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_openclaw_pir_review'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '61b6f231a53f4e0394e19c93bac21cb0'
                        key: {
                            list_id: {
                                id: 'f798a86e667a49deb2f27e44d2023ad0'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '62252b18273b42fb9dbb407feb7ce173'
                        key: {
                            list_id: {
                                id: 'd25cc13789124026a8a90f7208d0a1d9'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'is_sensitive'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63081dbef2d14e9f91844e9859cf8a0d'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'evidence_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '64f44eddf2d640f2a5f7362e2a1f8718'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '690a1e22b3d3432c9a5c522c5a89fdff'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'relationship_type'
                            value: 'recovery_change'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '695dcd38ba6f40faaa075e300aa65e14'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '697cebad6a9c4a24a6ab11b4dbc22c45'
                        key: {
                            sys_security_acl: 'a1d265864b254248b2a8f52325135473'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ad1a8ac01394e7485a13aa164383e44'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'captured_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6b4030e708d54b49b26269c05308d10f'
                        key: {
                            list_id: {
                                id: 'd25cc13789124026a8a90f7208d0a1d9'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'captured_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6cdec9f9c7354d80a58c25a6db00c296'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                            value: 'review'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f80463311614173887d43a9f09fee00'
                        key: {
                            sys_security_acl: '63b11dd3f58e44aface6f8886089ed02'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '70ff6f59d57740c892a88b8a5b1f8319'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '712ee091fc17491893a415ef446c01af'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'action_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71f1bbee7be945218a8c2dea25542017'
                        key: {
                            sys_security_acl: 'a9494fe3ba71479d9293993f034a6f63'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7235f8c1057f4f558ca5b63c870d538c'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73a641ac0ef3484f8a77dc4d6898b84f'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '73c06f3d5db044428164b2bf40230636'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                            value: 'done'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '750c99824a384a9286127a60632af58d'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'impact_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '755aa28b8a974cb8b226c82a70918ed3'
                        key: {
                            list_id: {
                                id: '4c16fbf4e59e4317bcae582ab0a1b3ae'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7752d4df0ecb40079a63fcd5814bd1d3'
                        key: {
                            sys_security_acl: 'f24a464c29b64c62afe7ac7ad226b499'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '775550d9ae1844388d2ec2ef25109fcf'
                        key: {
                            sys_security_acl: 'b60bf189b1804966ab06bfedd226a43d'
                            sys_user_role: {
                                id: 'bb85327867b0445092f38f96af8cc21d'
                                key: {
                                    name: 'x_openclaw_pir.reader'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '77ffe8372da449a9ac1d8414392b30ac'
                        key: {
                            sys_security_acl: 'b6fb61c9304647f5ac854cad3f99d5b4'
                            sys_user_role: {
                                id: 'bb85327867b0445092f38f96af8cc21d'
                                key: {
                                    name: 'x_openclaw_pir.reader'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7954d14fad6a4208a7821d21dbf95037'
                        key: {
                            sys_security_acl: 'f24a464c29b64c62afe7ac7ad226b499'
                            sys_user_role: {
                                id: 'bb85327867b0445092f38f96af8cc21d'
                                key: {
                                    name: 'x_openclaw_pir.reader'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '799f782b548a42eeabaa931157bf3c40'
                        key: {
                            sys_security_acl: 'ee3d2cd9f0c44ce6b4f259b428e6190e'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a2c9847fb45495595b73bd705b35529'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'pir_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b4c0a5c322d415aa93ed30995e33b56'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'review_due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '7b7769bcb71144da9723defd72a99006'
                        key: {
                            name: 'x_openclaw_pir_action'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7bd14a8cc4014dfe96dd7f29489ad33b'
                        key: {
                            sys_security_acl: '4e62e1babea4444c96d4d577403e4e21'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bd79b8c455446f29c0e0941d519ee8e'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'is_primary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7ddd1afb6b2f454ca09287791c3719fc'
                        key: {
                            sys_security_acl: '1a1d30e00f434c0eb9c1efd261e69fec'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7e2d9d53a8364ada890ad167aebc7438'
                        key: {
                            name: 'x_openclaw_pir_change'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7ebb4c51492f41ecad6df9a061b4d0fa'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f22be27ee0b40e2848cf5ab05fd0864'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7fc9df172db14f0497c613f5e2b30e81'
                        key: {
                            sys_security_acl: '578e80f9d0a74a81b65d893665ae1c45'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8024223c1a61437e83f431b709cd40bf'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'review_due_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '806b7e6e050f4e42bac7cf237e1295d5'
                        key: {
                            name: 'x_openclaw_pir_action'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83acc707a0894137adf2d1c6e0b491cb'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86a7ca18da5d4ca1aba58b874dad667d'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86d0a59a2cd740a3b8d6f6befca6448d'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'restored_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '87a0fd056de240539f198f9b6b316d6b'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'incident'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '87b34872fc9a4751bf04f1942eec605f'
                        key: {
                            sys_security_acl: 'b60bf189b1804966ab06bfedd226a43d'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '889acf0f29bb4ce8b303c693e69a3add'
                        key: {
                            list_id: {
                                id: 'd25cc13789124026a8a90f7208d0a1d9'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'pir'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '88d9033904e0477095a337d2e9429e7e'
                        key: {
                            sys_security_acl: 'ee3d2cd9f0c44ce6b4f259b428e6190e'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: '8966a4aab6d34b298c15219a027cb5e6'
                        key: {
                            name: 'openclaw_pir'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b3ffb0238b749c5b6a8cad825997798'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'source_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8c423dae8e1941c593be197511839cca'
                        key: {
                            name: 'x_openclaw_pir.admin'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8c65caa92ab44070b3bfb803617f0768'
                        key: {
                            sys_security_acl: '76aa8405858c4ddd9ae43ce8da3f6318'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92a5f2f84fec474cb6d3a4dd20fdea72'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'closed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9351e97ce38b475a941f75e67dcaf5e8'
                        key: {
                            list_id: {
                                id: 'd25cc13789124026a8a90f7208d0a1d9'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '93642f93cb9d4e6ea44db8e9fe68971c'
                        key: {
                            name: 'x_openclaw_pir.contributor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93dda4ba79524ecd97ba39c83db0cae1'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9441d7b3a29746f9909eb771836ca55d'
                        key: {
                            sys_security_acl: '1a1d30e00f434c0eb9c1efd261e69fec'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95b52d7bf75d405db5631f767edc24e7'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95dc7db328bd40de9d6c76abf780adf7'
                        key: {
                            sys_security_acl: '578e80f9d0a74a81b65d893665ae1c45'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '962ae16882184de59d3e75e094a00c9f'
                        key: {
                            sys_security_acl: '21354121c32245b48bae74221e403eb6'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '96de7852378e467d91b638f48cccfbbd'
                        key: {
                            sys_security_acl: 'b6fb61c9304647f5ac854cad3f99d5b4'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9879fadb61714d9eafd94cd0906012d7'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9958a6a37fe0412c880c12e35439c86d'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '99b7b2bf75ad4d27a2f3c8c21124523a'
                        key: {
                            sys_security_acl: '88c08ea664324fe2a4ebe2875368d6ae'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a8e67567d1045de864669dd2cded285'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'customer_impact'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b1a6e0c23b14fc488f3db4b7f947307'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9cc6483ee7cd413ab953082bfc284611'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'is_primary'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e607200dda145fcb070314ff203207a'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'pir'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9f9df66945b44ab99d0bb8ea87ffe421'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'review_owner'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'a38c87e743ef4c338845830fd03b17c1'
                        key: {
                            name: 'x_openclaw_pir_review'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3c9982c93f44062967a0f80d0b67a6b'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'executive_summary'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a4e12eb8b5924326b5b4d7b125604c45'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'pir'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a6f3e5b52ec249dfbda0575535e498f2'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a9088733dbca4403aca61d444c6cc3a4'
                        key: {
                            sys_security_acl: '814152d01952455480ca8e1d006b7e2c'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a952119ede354485a5a95c94247b0b39'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'completion_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a99f0a58f8384ec291107ae38f6e8298'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'acf1725a69bf471a84d6b4f69cfb91ba'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'action_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad7a282d915e48e2a946c715d3db2958'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'captured_at'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae4722bb5b37406fa921ebc3dbea4b68'
                        key: {
                            sys_security_acl: 'b6fb61c9304647f5ac854cad3f99d5b4'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ae5505ef31a94f2fa94a1cbb36386b2a'
                        key: {
                            list_id: {
                                id: 'f798a86e667a49deb2f27e44d2023ad0'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'is_sensitive'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af4c36f7e8084418847afeffd7614438'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'open_action_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'af7c577dae794534ad19e820aac7f262'
                        key: {
                            name: 'x_openclaw_pir_change'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_openclaw_pir_review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'afbf63b6c9a240fdb20a0e78277d1ad5'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aff00666796146e08c7a983c066b75fc'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'completed_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b144c78ee7fe430e84b0bb49307328fa'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'captured_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b151684b4cf14a71afac838429578c23'
                        key: {
                            list_id: {
                                id: 'a38c87e743ef4c338845830fd03b17c1'
                                key: {
                                    name: 'x_openclaw_pir_review'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b3852f77f1524d40acc75155511cf997'
                        key: {
                            sys_security_acl: 'b1be472ac0954e75ad1e350522e4a809'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4f72935c2fb4387aee4326db92610b5'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'root_cause_summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b506473b46a840cd923856abf00a3adc'
                        key: {
                            sys_security_acl: 'acd98fd4a0154aceab7a9c6b9b172cdc'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba93f8f8c63847448f651cc01616b110'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'pir'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'bb85327867b0445092f38f96af8cc21d'
                        key: {
                            name: 'x_openclaw_pir.reader'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bf1f33e649404f4ba2613ed1ba43e2d9'
                        key: {
                            list_id: {
                                id: 'f798a86e667a49deb2f27e44d2023ad0'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'evidence_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bf5587e55fa04296bb9e4745553c9d9e'
                        key: {
                            name: 'x_openclaw_pir_review'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c64708faec184555ac46377de559ad89'
                        key: {
                            name: 'x_openclaw_pir_review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6ed7beb52f64dfa9c71a2655a2b9366'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c8439f8fa5e74d59a3f25e3a124ba83e'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca36c52d73cb49ed84be6b06a5742b69'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'review_owner'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cb28fcba28704448be0ec60b20b552da'
                        key: {
                            sys_security_acl: 'a1d265864b254248b2a8f52325135473'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                        key: {
                            name: 'x_openclaw_pir.manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc83b9bda71b419ab7c4ce9244cc8a64'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'relationship_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ccbbfdcb2daf4665a5c97baf8529a419'
                        key: {
                            sys_security_acl: '76aa8405858c4ddd9ae43ce8da3f6318'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cecc1047de3548218f3cd7cc59559c2b'
                        key: {
                            sys_security_acl: 'ee3d2cd9f0c44ce6b4f259b428e6190e'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cfc24d4f6ad746adb1c95432352e9d79'
                        key: {
                            list_id: {
                                id: 'af7c577dae794534ad19e820aac7f262'
                                key: {
                                    name: 'x_openclaw_pir_change'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd048ede2aa52483c9c22e094e3d8d9c8'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'pir'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd089e8717e0344a4a677e3a0e296243f'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'relationship_type'
                            value: 'caused_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1c020816af940d29e36c20fe103bb30'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'd25cc13789124026a8a90f7208d0a1d9'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3584c99cc46479e9f24f3a9c96720ca'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'closed_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4b10cc5e6af4fd484d1bdd763d8be25'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd6167b79cc164ef68d9526d8bb88d1ac'
                        key: {
                            list_id: {
                                id: 'f798a86e667a49deb2f27e44d2023ad0'
                                key: {
                                    name: 'x_openclaw_pir_evidence'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'captured_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd64d84cac1a4449588fbf61961332243'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'change_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd6628b3742764976a775aab8db6fb680'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            value: 'link'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd7fa22534dda4352acd9a35491e914d2'
                        key: {
                            sys_security_acl: '11fa49d1ecb24b58b01632cb7aff8d90'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd88f2c5d392d4635b3895be1bd0e2d7b'
                        key: {
                            sys_security_acl: 'a9494fe3ba71479d9293993f034a6f63'
                            sys_user_role: {
                                id: 'cb5bf406aac341a7ad9eb89109cdcd9e'
                                key: {
                                    name: 'x_openclaw_pir.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd91e9cdd87f0405888e7c91727fa916e'
                        key: {
                            name: 'x_openclaw_pir_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd96b4bdb1b41488b8f09f481caf342e7'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'started_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'da34fe08633a47728d61e804fcea3e45'
                        key: {
                            list_id: {
                                id: 'af7c577dae794534ad19e820aac7f262'
                                key: {
                                    name: 'x_openclaw_pir_change'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'change_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dbc5e8a01ad74ed4b36bd4b2a9131533'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            value: 'screenshot'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'dbcd27eff6bb47d597f3bfc621615c33'
                        key: {
                            list_id: {
                                id: '612d6d0e38334f9d82bdd2443d7a6f29'
                                key: {
                                    name: 'x_openclaw_pir_incident'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'impact_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dce765bd5951417d80f9ec35cf8b98d6'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de764fa94e4f4251b019df3cc61821c0'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'deeddbc49f57479b841c1d2537505ef0'
                        key: {
                            name: 'x_openclaw_pir_change'
                            element: 'pir'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfaf7962b32d419aa656ebb35df4e62b'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'pir'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e3155a49aa624ebc96a0783042f489bc'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'source_url'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e35b9025ab6b46ff9dddcef25c39980f'
                        key: {
                            list_id: {
                                id: '7b7769bcb71144da9723defd72a99006'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e501e68bb0c846199382f4e16b53c471'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e75f96b0ad5c4131aa23f370c1f64f42'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'evidence_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e77aaf25abc44f9e9e26098d6ac4c039'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'approved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7a86101d0b84259b2a06a9d8e8caa00'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec9e0bc4d14244298a5d88b5844810df'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'root_cause_summary'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed458454a0b8409c972456ba1f81af78'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'evidence_type'
                            value: 'document'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'edd8f1df234443a6986ffb736ad064fe'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef59298efc7047509d6fb9d989d463aa'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'service_impact'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'efe4121880f64094add42b6f682bf2d5'
                        key: {
                            sys_security_acl: '88c08ea664324fe2a4ebe2875368d6ae'
                            sys_user_role: {
                                id: '93642f93cb9d4e6ea44db8e9fe68971c'
                                key: {
                                    name: 'x_openclaw_pir.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0faf011606f4881bbacb24c93498986'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'is_sensitive'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1b1f3b9af454845bcb0f540866a51c6'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'review_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f1fccfd970e9483c957791ec644006d0'
                        key: {
                            sys_security_acl: '11fa49d1ecb24b58b01632cb7aff8d90'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f42d09ba5a724aee8dcfcd118e6566a4'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'pir'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4bd8a29b4bc4d71a1c479537c96b9bb'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'state'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f50adfb25f0c41bcb920b0cb49a2462e'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'closure_ready'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f51a69d3ff99479ba811787840a77ee6'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'is_sensitive'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f5da1ed06a4e460e9db28ee0f29b1bb7'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f798a86e667a49deb2f27e44d2023ad0'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            view: {
                                id: '8966a4aab6d34b298c15219a027cb5e6'
                                key: {
                                    name: 'openclaw_pir'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_openclaw_pir_review'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f81a9f7f2dea4d7d92fbe7d99eb8717a'
                        key: {
                            list_id: {
                                id: '4c16fbf4e59e4317bcae582ab0a1b3ae'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f8dd158d4c8c44e19245e7c9bc541974'
                        key: {
                            sys_security_acl: 'cb012d97813a4f129701c8e837280252'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f930ec6813fb4c9493861be64cacbc26'
                        key: {
                            list_id: {
                                id: '4c16fbf4e59e4317bcae582ab0a1b3ae'
                                key: {
                                    name: 'x_openclaw_pir_action'
                                    view: {
                                        id: '8966a4aab6d34b298c15219a027cb5e6'
                                        key: {
                                            name: 'openclaw_pir'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_openclaw_pir_review'
                                }
                            }
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9d4cd86606048e08421b6f0207332dc'
                        key: {
                            name: 'x_openclaw_pir_action'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f9e25a07840c4e5c91e5c5cdda945335'
                        key: {
                            name: 'x_openclaw_pir_evidence'
                            element: 'captured_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'faac6f80c17c4bbb801efd681ba759f6'
                        key: {
                            sys_security_acl: 'f0501eeb1d0246adb6817c0c65c344c4'
                            sys_user_role: {
                                id: '8c423dae8e1941c593be197511839cca'
                                key: {
                                    name: 'x_openclaw_pir.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'faeee56a753245f2b1044c30861790f0'
                        key: {
                            sys_security_acl: '4e62e1babea4444c96d4d577403e4e21'
                            sys_user_role: {
                                id: 'bb85327867b0445092f38f96af8cc21d'
                                key: {
                                    name: 'x_openclaw_pir.reader'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe181c01b3f844b89d675614eb28be3b'
                        key: {
                            name: 'x_openclaw_pir_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'feec2663f87a4acfb738bc8db3bcff94'
                        key: {
                            name: 'x_openclaw_pir_review'
                            element: 'detailed_findings'
                        }
                    },
                ]
            }
        }
    }
}
