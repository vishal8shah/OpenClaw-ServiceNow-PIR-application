#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${SERVICENOW_APP_NAME:-OpenClaw PIR}"
SCOPE_NAME="${SERVICENOW_SCOPE:-x_yourco_pir}"

echo "This script starts the interactive ServiceNow SDK app bootstrap"
echo "Application name: ${APP_NAME}"
echo "Scope name: ${SCOPE_NAME}"

echo "Run authentication first if needed:"
echo "npx @servicenow/sdk auth"

echo "Starting init"
npx @servicenow/sdk init
