import { E48 as TE48 } from "../api/e48/E48";

export const E48_TITLE_FIELD = "id";

export const E48Title = (record: TE48): string => {
  return record.id || String(record.id);
};
