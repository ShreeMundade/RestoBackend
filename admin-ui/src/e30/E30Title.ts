import { E30 as TE30 } from "../api/e30/E30";

export const E30_TITLE_FIELD = "id";

export const E30Title = (record: TE30): string => {
  return record.id || String(record.id);
};
