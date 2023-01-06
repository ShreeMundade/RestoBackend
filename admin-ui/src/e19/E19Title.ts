import { E19 as TE19 } from "../api/e19/E19";

export const E19_TITLE_FIELD = "id";

export const E19Title = (record: TE19): string => {
  return record.id || String(record.id);
};
