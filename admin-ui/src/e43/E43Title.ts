import { E43 as TE43 } from "../api/e43/E43";

export const E43_TITLE_FIELD = "id";

export const E43Title = (record: TE43): string => {
  return record.id || String(record.id);
};
