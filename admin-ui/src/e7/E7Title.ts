import { E7 as TE7 } from "../api/e7/E7";

export const E7_TITLE_FIELD = "id";

export const E7Title = (record: TE7): string => {
  return record.id || String(record.id);
};
