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
