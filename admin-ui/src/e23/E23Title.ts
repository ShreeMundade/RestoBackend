import { E23 as TE23 } from "../api/e23/E23";

export const E23_TITLE_FIELD = "id";

export const E23Title = (record: TE23): string => {
  return record.id || String(record.id);
};
