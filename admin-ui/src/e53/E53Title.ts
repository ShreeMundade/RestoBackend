import { E53 as TE53 } from "../api/e53/E53";

export const E53_TITLE_FIELD = "id";

export const E53Title = (record: TE53): string => {
  return record.id || String(record.id);
};
