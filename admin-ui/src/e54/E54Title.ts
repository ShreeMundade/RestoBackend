import { E54 as TE54 } from "../api/e54/E54";

export const E54_TITLE_FIELD = "id";

export const E54Title = (record: TE54): string => {
  return record.id || String(record.id);
};
