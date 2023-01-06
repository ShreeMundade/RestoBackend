import { E58 as TE58 } from "../api/e58/E58";

export const E58_TITLE_FIELD = "id";

export const E58Title = (record: TE58): string => {
  return record.id || String(record.id);
};
