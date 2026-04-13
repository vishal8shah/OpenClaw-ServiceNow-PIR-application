#!/usr/bin/env bash
set -euo pipefail

echo "Checking Node"
node --version || true

echo "Checking OpenClaw"
openclaw status || true

echo "Recommended next checks"
echo "1. systemctl --user status"
echo "2. openclaw dashboard"
echo "3. openclaw security audit"
echo "4. openclaw browser --browser-profile openclaw status"
