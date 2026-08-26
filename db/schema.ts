export const toolDeliverables = {
  table: "tool_deliverables",
  columns: {
    id: "TEXT PRIMARY KEY",
    projectKey: "TEXT NOT NULL",
    projectName: "TEXT NOT NULL",
    toolId: "TEXT NOT NULL",
    toolName: "TEXT NOT NULL",
    version: "INTEGER NOT NULL",
    completion: "INTEGER NOT NULL DEFAULT 0",
    payloadJson: "TEXT NOT NULL",
    createdAt: "TEXT NOT NULL",
    updatedAt: "TEXT NOT NULL",
  },
} as const;

export const projects = {
  table: "projects",
  columns: {
    id: "TEXT PRIMARY KEY",
    name: "TEXT NOT NULL",
    area: "TEXT NOT NULL DEFAULT ''",
    location: "TEXT NOT NULL DEFAULT ''",
    problem: "TEXT NOT NULL DEFAULT ''",
    primaryMetric: "TEXT NOT NULL DEFAULT ''",
    baseline: "TEXT NOT NULL DEFAULT ''",
    target: "TEXT NOT NULL DEFAULT ''",
    deadline: "TEXT NOT NULL DEFAULT ''",
    currentPhase: "TEXT NOT NULL DEFAULT 'define'",
    status: "TEXT NOT NULL DEFAULT 'active'",
    ownerEmail: "TEXT NOT NULL",
    createdAt: "TEXT NOT NULL",
    updatedAt: "TEXT NOT NULL",
  },
} as const;

export const projectMembers = {
  table: "project_members",
  primaryKey: ["project_id", "email"],
} as const;

export const projectRecords = {
  table: "project_records",
  primaryKey: ["project_id", "record_type"],
} as const;

export const evidenceFiles = {
  table: "evidence_files",
  columns: {
    id: "TEXT PRIMARY KEY",
    projectId: "TEXT NOT NULL",
    toolId: "TEXT NOT NULL",
    fileName: "TEXT NOT NULL",
    contentType: "TEXT NOT NULL",
    sizeBytes: "INTEGER NOT NULL",
    objectKey: "TEXT NOT NULL",
    uploadedBy: "TEXT NOT NULL",
    createdAt: "TEXT NOT NULL",
  },
} as const;
