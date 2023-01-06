import { E25 as TE25 } from "../api/e25/E25";

export const E25_TITLE_FIELD = "id";

export const E25Title = (record: TE25): string => {
  return record.id || String(record.id);
};
