import { E14 as TE14 } from "../api/e14/E14";

export const E14_TITLE_FIELD = "id";

export const E14Title = (record: TE14): string => {
  return record.id || String(record.id);
};
