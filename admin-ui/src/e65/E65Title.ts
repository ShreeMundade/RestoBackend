import { E65 as TE65 } from "../api/e65/E65";

export const E65_TITLE_FIELD = "id";

export const E65Title = (record: TE65): string => {
  return record.id || String(record.id);
};
