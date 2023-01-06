import { E6 as TE6 } from "../api/e6/E6";

export const E6_TITLE_FIELD = "id";

export const E6Title = (record: TE6): string => {
  return record.id || String(record.id);
};
