import { E59 as TE59 } from "../api/e59/E59";

export const E59_TITLE_FIELD = "id";

export const E59Title = (record: TE59): string => {
  return record.id || String(record.id);
};
