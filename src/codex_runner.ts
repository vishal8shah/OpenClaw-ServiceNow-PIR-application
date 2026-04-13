import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import { Codex } from "@openai/codex-sdk";

dotenv.config();

type Mode = "plan" | "implement" | "review";

function buildSystemPrompt(mode: Mode): string {
  if (mode === "plan") {
    return [
      "You are a senior ServiceNow architect working on a Personal Developer Instance.",
      "Design only for non production use, but keep the design production worthy.",
      "Prefer scoped apps.",
      "Prefer source driven development with the ServiceNow SDK and ServiceNow Fluent.",
      "Output sections in this exact order:",
      "1. app_goal",
      "2. domain_model",
      "3. roles_and_acls",
      "4. flows_and_business_rules",
      "5. api_surface",
      "6. test_plan",
      "7. deployment_plan",
      "8. risks_and_guardrails",
      "Keep the answer concrete and implementation ready."
    ].join("\n");
  }

  if (mode === "implement") {
    return [
      "You are a senior ServiceNow developer using the ServiceNow SDK.",
      "Generate source driven implementation notes and file by file tasks.",
      "Assume the target is a scoped application in a local repository.",
      "Prefer ServiceNow Fluent for metadata.",
      "Call out anything that must still be done manually in the instance.",
      "Output sections in this exact order:",
      "1. file_structure",
      "2. fluent_artifacts",
      "3. server_scripts",
      "4. atf_tests",
      "5. install_steps",
      "6. manual_steps",
      "7. validation_steps"
    ].join("\n");
  }

  return [
    "You are a ServiceNow reviewer.",
    "Review this repository for scoped app quality, ACL risk, upgrade safety, and deploy readiness.",
    "Output sections in this exact order:",
    "1. verdict",
    "2. critical_findings",
    "3. warnings",
    "4. missing_tests",
    "5. deploy_readiness",
    "6. next_actions"
  ].join("\n");
}

async function readInput(target: string): Promise<string> {
  const resolved = path.resolve(target);
  return readFile(resolved, "utf8");
}

async function main(): Promise<void> {
  const modeArg = process.argv[2] as Mode | undefined;
  const targetArg = process.argv[3];

  if (!modeArg || !targetArg || !["plan", "implement", "review"].includes(modeArg)) {
    console.error("Usage: tsx src/codex_runner.ts <plan|implement|review> <file_or_path>");
    process.exit(1);
  }

  const model = process.env.CODEX_MODEL || "gpt-5.4";
  const apiKey = process.env.CODEX_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("Codex run failed");
    console.error("Missing CODEX_API_KEY or OPENAI_API_KEY in environment");
    process.exit(1);
  }

  const codex = new Codex({ apiKey });
  const thread = codex.startThread({ model });

  let userContent = "";

  if (modeArg === "review") {
    userContent = [
      `Repository path: ${path.resolve(targetArg)}`,
      "Review this repository with a ServiceNow scoped application lens.",
      "Focus on ACLs, roles, naming, Flow Designer usage, test coverage, deployment risk, and obvious anti patterns."
    ].join("\n\n");
  } else {
    const requirement = await readInput(targetArg);
    userContent = [
      `Mode: ${modeArg}`,
      `Model: ${model}`,
      "Requirement:",
      requirement
    ].join("\n\n");
  }

  const prompt = `${buildSystemPrompt(modeArg)}\n\n${userContent}`;

  try {
    const result = await thread.run(prompt);
    console.log(result.finalResponse);
  } catch (error) {
    console.error("Codex run failed");
    console.error(error);
    process.exit(1);
  }
}

main();
