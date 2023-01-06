import { E10 as TE10 } from "../api/e10/E10";

export const E10_TITLE_FIELD = "id";

export const E10Title = (record: TE10): string => {
  return record.id || String(record.id);
};
