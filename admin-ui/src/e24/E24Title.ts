import { E24 as TE24 } from "../api/e24/E24";

export const E24_TITLE_FIELD = "id";

export const E24Title = (record: TE24): string => {
  return record.id || String(record.id);
};
