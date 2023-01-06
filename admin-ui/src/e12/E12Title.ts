import { E12 as TE12 } from "../api/e12/E12";

export const E12_TITLE_FIELD = "id";

export const E12Title = (record: TE12): string => {
  return record.id || String(record.id);
};
