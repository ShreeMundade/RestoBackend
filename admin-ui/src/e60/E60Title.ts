import { E60 as TE60 } from "../api/e60/E60";

export const E60_TITLE_FIELD = "id";

export const E60Title = (record: TE60): string => {
  return record.id || String(record.id);
};
