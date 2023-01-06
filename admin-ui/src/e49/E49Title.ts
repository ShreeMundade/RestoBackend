import { E49 as TE49 } from "../api/e49/E49";

export const E49_TITLE_FIELD = "id";

export const E49Title = (record: TE49): string => {
  return record.id || String(record.id);
};
