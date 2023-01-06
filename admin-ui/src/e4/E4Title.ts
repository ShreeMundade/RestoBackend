import { E4 as TE4 } from "../api/e4/E4";

export const E4_TITLE_FIELD = "id";

export const E4Title = (record: TE4): string => {
  return record.id || String(record.id);
};
