import { E50 as TE50 } from "../api/e50/E50";

export const E50_TITLE_FIELD = "id";

export const E50Title = (record: TE50): string => {
  return record.id || String(record.id);
};
