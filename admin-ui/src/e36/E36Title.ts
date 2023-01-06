import { E36 as TE36 } from "../api/e36/E36";

export const E36_TITLE_FIELD = "id";

export const E36Title = (record: TE36): string => {
  return record.id || String(record.id);
};
