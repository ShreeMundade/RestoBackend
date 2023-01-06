import { E57 as TE57 } from "../api/e57/E57";

export const E57_TITLE_FIELD = "id";

export const E57Title = (record: TE57): string => {
  return record.id || String(record.id);
};
