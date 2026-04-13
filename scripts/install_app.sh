#!/usr/bin/env bash
set -euo pipefail

AUTH_ALIAS="${SERVICENOW_AUTH_ALIAS:-pdi}"

echo "Building app"
npx @servicenow/sdk build

echo "Installing app using auth alias ${AUTH_ALIAS}"
npx @servicenow/sdk install --auth "${AUTH_ALIAS}"
