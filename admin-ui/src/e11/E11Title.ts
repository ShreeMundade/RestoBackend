import { E11 as TE11 } from "../api/e11/E11";

export const E11_TITLE_FIELD = "id";

export const E11Title = (record: TE11): string => {
  return record.id || String(record.id);
};
