import { E8 as TE8 } from "../api/e8/E8";

export const E8_TITLE_FIELD = "id";

export const E8Title = (record: TE8): string => {
  return record.id || String(record.id);
};
