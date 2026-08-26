CREATE TABLE IF NOT EXISTS evidence_files (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  tool_id TEXT NOT NULL,
  file_name TEXT NOT NULL,
  content_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  object_key TEXT NOT NULL,
  uploaded_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS evidence_files_project_tool_idx
  ON evidence_files (project_id, tool_id, created_at DESC);
