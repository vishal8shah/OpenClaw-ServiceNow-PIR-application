# Implementation Guide

## 1. Target architecture

Use this control split:

1. OpenClaw is the chat and tool orchestration layer
2. Codex SDK is the coding brain for plan, implement, and review loops
3. ServiceNow SDK is the source driven app build and deploy path
4. ServiceNow PDI is the non production target instance
5. Git is the source of truth

## 2. Why this architecture

It matches the current platform surfaces.

1. OpenClaw on WSL2 is a supported and recommended path, and WSL2 is explicitly called the more stable option for the full experience.
2. OpenClaw tools include exec, browser, web search, and skills.
3. OpenClaw has a built in scheduler.
4. The Codex SDK lets you programmatically control local Codex agents from Node.js 18 or later.
5. ServiceNow SDK lets you create and modify scoped applications locally, build them, and install them on a non production instance.
6. ServiceNow says Git plus Application Repository is the preferred deployment method for custom scoped apps.

## 3. Local machine baseline

For your old laptop, keep the design lean.

1. Run one OpenClaw gateway only
2. Use one main coding model only
3. Do not run container heavy stacks unless needed
4. Keep browser use targeted and short lived
5. Use local source control and small incremental tasks

## 4. Hard rules

1. Do not build directly in the browser as the main method
2. Do not let the agent hold your ServiceNow credentials
3. Log into the OpenClaw browser manually
4. Keep browser control local only
5. Never treat the PDI as business or production use

## 5. Step by step build order

### Step 1
Prepare WSL2 and OpenClaw.

Check these first:

1. `systemctl --user status`
2. `openclaw status`
3. `openclaw dashboard`
4. `openclaw security audit`

### Step 2
Prepare browser control.

1. Enable browser in OpenClaw if disabled
2. Start the OpenClaw browser profile
3. Open the ServiceNow PDI login page
4. Log in manually
5. Save the session only in the dedicated OpenClaw browser profile

### Step 3
Prepare ServiceNow source development.

1. Install ServiceNow SDK locally in the repo
2. Authenticate to your PDI with `npx @servicenow/sdk auth`
3. Create a scoped app with `npx @servicenow/sdk init`
4. Install dependencies with `npm install`
5. Build with `npx @servicenow/sdk build`
6. Install to the PDI with `npx @servicenow/sdk install --auth <alias>`

### Step 4
Prepare Codex SDK.

1. Install project dependencies with `npm install`
2. Make sure Codex auth is working on the machine
3. Set `CODEX_MODEL=gpt-5.4` unless you have a reason not to
4. Use `npm run codex:plan` to get the first blueprint
5. Use `npm run codex:implement` for file by file implementation notes
6. Use `npm run codex:review` before each install

### Step 5
Create the first app.

Use the provided requirement template and keep the first app small.

Recommended first app:

Post Incident Review app

Why:

1. clear entities
2. clear approval flow
3. meaningful ACLs
4. easy to demo
5. low blast radius in a PDI

### Step 6
Test every increment.

1. Add ATF tests for create, update, approval, and close
2. Run ATF only on non production instances
3. Run Instance Scan after each meaningful install
4. Use the browser only to validate forms, lists, menus, and flows after install

## 6. Role split

### OpenClaw

Use OpenClaw for:

1. receiving requirements over chat
2. opening the PDI in the dedicated browser
3. navigating the UI for validation
4. calling shell commands in the repo
5. running scheduled checklists later

### Codex SDK

Use Codex SDK for:

1. planning the app
2. translating requirements into build tasks
3. reviewing local code and metadata
4. tightening prompts and workflow instructions

### ServiceNow SDK

Use ServiceNow SDK for:

1. auth
2. init
3. build
4. install
5. transform later if you need to bring instance metadata back into source

## 7. What to automate now

Automate now:

1. requirement to blueprint
2. blueprint to task list
3. local build steps
4. review checklist generation
5. install commands
6. browser based validation steps

Do not automate yet:

1. direct production activity
2. destructive cleanup on the instance
3. ACL changes without review
4. cross scope privileges without review
5. large browser driven authoring inside ServiceNow

## 8. First ten tasks

1. Confirm OpenClaw health and browser tool availability
2. Manually log into the PDI in the OpenClaw browser
3. Create a new repo from this starter
4. Install npm dependencies
5. Run Codex planning on the requirement file
6. Run ServiceNow SDK auth
7. Run ServiceNow SDK init for a scoped app
8. Build locally
9. Install to the PDI
10. Validate with browser, ATF, and Instance Scan

## 9. Validation loop

After each install:

1. OpenClaw browser checks menus, forms, and navigation
2. ATF checks critical flows
3. Instance Scan checks platform quality
4. Codex review checks repo quality
5. Human review signs off before larger changes

## 10. Future extension

Once the first app is working, add a second skill and a second app.

The second app should be your Change and Reliability Governor.
