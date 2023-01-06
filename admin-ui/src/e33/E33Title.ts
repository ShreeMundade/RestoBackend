import { E33 as TE33 } from "../api/e33/E33";

export const E33_TITLE_FIELD = "id";

export const E33Title = (record: TE33): string => {
  return record.id || String(record.id);
};
