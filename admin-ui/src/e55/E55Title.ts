import { E55 as TE55 } from "../api/e55/E55";

export const E55_TITLE_FIELD = "id";

export const E55Title = (record: TE55): string => {
  return record.id || String(record.id);
};
