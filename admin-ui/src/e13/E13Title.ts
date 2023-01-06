import { E13 as TE13 } from "../api/e13/E13";

export const E13_TITLE_FIELD = "id";

export const E13Title = (record: TE13): string => {
  return record.id || String(record.id);
};
