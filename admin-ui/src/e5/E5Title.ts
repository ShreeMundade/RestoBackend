import { E5 as TE5 } from "../api/e5/E5";

export const E5_TITLE_FIELD = "id";

export const E5Title = (record: TE5): string => {
  return record.id || String(record.id);
};
