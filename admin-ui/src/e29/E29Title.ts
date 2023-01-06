import { E29 as TE29 } from "../api/e29/E29";

export const E29_TITLE_FIELD = "id";

export const E29Title = (record: TE29): string => {
  return record.id || String(record.id);
};
