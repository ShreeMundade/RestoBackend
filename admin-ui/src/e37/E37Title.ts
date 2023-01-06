import { E37 as TE37 } from "../api/e37/E37";

export const E37_TITLE_FIELD = "id";

export const E37Title = (record: TE37): string => {
  return record.id || String(record.id);
};
