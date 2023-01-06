import { E68 as TE68 } from "../api/e68/E68";

export const E68_TITLE_FIELD = "id";

export const E68Title = (record: TE68): string => {
  return record.id || String(record.id);
};
