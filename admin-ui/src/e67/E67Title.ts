import { E67 as TE67 } from "../api/e67/E67";

export const E67_TITLE_FIELD = "id";

export const E67Title = (record: TE67): string => {
  return record.id || String(record.id);
};
