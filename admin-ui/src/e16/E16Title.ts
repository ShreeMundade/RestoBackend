import { E16 as TE16 } from "../api/e16/E16";

export const E16_TITLE_FIELD = "id";

export const E16Title = (record: TE16): string => {
  return record.id || String(record.id);
};
