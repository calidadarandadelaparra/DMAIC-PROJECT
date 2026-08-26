CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  area TEXT NOT NULL DEFAULT '',
  location TEXT NOT NULL DEFAULT '',
  problem TEXT NOT NULL DEFAULT '',
  primary_metric TEXT NOT NULL DEFAULT '',
  baseline TEXT NOT NULL DEFAULT '',
  target TEXT NOT NULL DEFAULT '',
  deadline TEXT NOT NULL DEFAULT '',
  current_phase TEXT NOT NULL DEFAULT 'define',
  status TEXT NOT NULL DEFAULT 'active',
  owner_email TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS projects_owner_updated_idx
  ON projects (owner_email, updated_at DESC);

CREATE TABLE IF NOT EXISTS project_members (
  project_id TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'member',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (project_id, email),
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS project_members_email_idx
  ON project_members (email, status, updated_at DESC);

CREATE TABLE IF NOT EXISTS project_records (
  project_id TEXT NOT NULL,
  record_type TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (project_id, record_type),
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS project_records_project_updated_idx
  ON project_records (project_id, updated_at DESC);
