import { E66 as TE66 } from "../api/e66/E66";

export const E66_TITLE_FIELD = "id";

export const E66Title = (record: TE66): string => {
  return record.id || String(record.id);
};
