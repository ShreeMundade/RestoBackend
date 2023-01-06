import { E61 as TE61 } from "../api/e61/E61";

export const E61_TITLE_FIELD = "id";

export const E61Title = (record: TE61): string => {
  return record.id || String(record.id);
};
