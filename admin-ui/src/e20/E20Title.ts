import { E20 as TE20 } from "../api/e20/E20";

export const E20_TITLE_FIELD = "id";

export const E20Title = (record: TE20): string => {
  return record.id || String(record.id);
};
