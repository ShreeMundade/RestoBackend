import { E22 as TE22 } from "../api/e22/E22";

export const E22_TITLE_FIELD = "id";

export const E22Title = (record: TE22): string => {
  return record.id || String(record.id);
};
