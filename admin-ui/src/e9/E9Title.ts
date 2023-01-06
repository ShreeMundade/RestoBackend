import { E9 as TE9 } from "../api/e9/E9";

export const E9_TITLE_FIELD = "id";

export const E9Title = (record: TE9): string => {
  return record.id || String(record.id);
};
