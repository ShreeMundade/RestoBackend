import { E45 as TE45 } from "../api/e45/E45";

export const E45_TITLE_FIELD = "id";

export const E45Title = (record: TE45): string => {
  return record.id || String(record.id);
};
