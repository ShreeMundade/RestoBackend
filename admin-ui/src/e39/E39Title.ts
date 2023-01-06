import { E39 as TE39 } from "../api/e39/E39";

export const E39_TITLE_FIELD = "id";

export const E39Title = (record: TE39): string => {
  return record.id || String(record.id);
};
