import { E70 as TE70 } from "../api/e70/E70";

export const E70_TITLE_FIELD = "id";

export const E70Title = (record: TE70): string => {
  return record.id || String(record.id);
};
