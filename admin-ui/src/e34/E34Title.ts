import { E34 as TE34 } from "../api/e34/E34";

export const E34_TITLE_FIELD = "id";

export const E34Title = (record: TE34): string => {
  return record.id || String(record.id);
};
