import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const source = await readFile(resolve(projectRoot, "worker/index.js"), "utf8");
const scriptStart = source.lastIndexOf("<script>") + "<script>".length;
const scriptEnd = source.lastIndexOf("</script>");

assert.ok(scriptStart > "<script>".length, "Client script must exist");
assert.ok(scriptEnd > scriptStart, "Client script must close");
new Function(source.slice(scriptStart, scriptEnd));

const staticIds = new Set(
  [...source.matchAll(/id=\"([^\"]+)\"/g)].map((match) => match[1]),
);
const referencedIds = new Set(
  [...source.matchAll(/getElementById\('([^']+)'\)/g)].map((match) => match[1]),
);
assert.deepEqual(
  [...referencedIds].filter((id) => !staticIds.has(id)).sort(),
  [],
  "Every static DOM reference must resolve",
);

for (const required of [
  "/api/session",
  "/api/projects",
  "/api/project-record",
  "/api/evidence",
  "projectScopedStorageKey('tool_'",
  "ganttStorageKey()",
  "bootstrapProjects()",
]) {
  assert.ok(source.includes(required), `Missing project foundation: ${required}`);
}

const hosting = JSON.parse(
  await readFile(resolve(projectRoot, ".openai/hosting.json"), "utf8"),
);
assert.equal(hosting.d1, "DB", "Project records require D1");
assert.equal(hosting.r2, "BUCKET", "Evidence uploads require R2");

assert.ok(
  !source.includes("localStorage.setItem('dmaicTasks'"),
  "Gantt writes must be scoped to the active project",
);

console.log("Client script and project isolation checks passed");
