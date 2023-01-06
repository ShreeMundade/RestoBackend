import { E52 as TE52 } from "../api/e52/E52";

export const E52_TITLE_FIELD = "id";

export const E52Title = (record: TE52): string => {
  return record.id || String(record.id);
};
