import { E28 as TE28 } from "../api/e28/E28";

export const E28_TITLE_FIELD = "id";

export const E28Title = (record: TE28): string => {
  return record.id || String(record.id);
};
