import { E17 as TE17 } from "../api/e17/E17";

export const E17_TITLE_FIELD = "id";

export const E17Title = (record: TE17): string => {
  return record.id || String(record.id);
};
