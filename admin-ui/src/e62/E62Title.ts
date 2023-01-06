import { E62 as TE62 } from "../api/e62/E62";

export const E62_TITLE_FIELD = "id";

export const E62Title = (record: TE62): string => {
  return record.id || String(record.id);
};
