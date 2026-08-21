CREATE TABLE IF NOT EXISTS tool_deliverables (
  id TEXT PRIMARY KEY,
  project_key TEXT NOT NULL,
  project_name TEXT NOT NULL,
  tool_id TEXT NOT NULL,
  tool_name TEXT NOT NULL,
  version INTEGER NOT NULL,
  completion INTEGER NOT NULL DEFAULT 0,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS tool_deliverables_project_tool_idx
  ON tool_deliverables (project_key, tool_id, created_at DESC);
