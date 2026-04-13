# OpenClaw ServiceNow Starter

This starter is designed for a local build on WSL2 Ubuntu with:

1. OpenClaw running locally
2. ServiceNow Personal Developer Instance as the non production target
3. Codex SDK for code generation and edit loops
4. Git as the source of truth

## What this starter includes

1. A practical implementation guide in `docs/implementation_guide.md`
2. A simple Codex SDK runner in `src/codex_runner.ts`
3. Skill templates for OpenClaw and Codex
4. Requirement and blueprint templates
5. Shell helpers for local setup and app creation

## Core rule

Use browser automation for validation and guided exploration.
Use source driven development for actual app building.

## Suggested first MVP

Build a scoped Post Incident Review app in your PDI.

## Quick start

1. Read `docs/implementation_guide.md`
2. Copy `.env.example` to `.env`
3. Install dependencies with `npm install`
4. Review the skill files under `skills/`
5. Put your requirement into `templates/requirement.md`
6. Run the Codex runner against that requirement
7. Create the scoped app with the ServiceNow SDK
8. Let OpenClaw validate in the browser after deploy
