import { E63 as TE63 } from "../api/e63/E63";

export const E63_TITLE_FIELD = "id";

export const E63Title = (record: TE63): string => {
  return record.id || String(record.id);
};
