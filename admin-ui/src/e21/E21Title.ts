import { E21 as TE21 } from "../api/e21/E21";

export const E21_TITLE_FIELD = "id";

export const E21Title = (record: TE21): string => {
  return record.id || String(record.id);
};
