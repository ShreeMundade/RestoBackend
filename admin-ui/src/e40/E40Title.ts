import { E40 as TE40 } from "../api/e40/E40";

export const E40_TITLE_FIELD = "id";

export const E40Title = (record: TE40): string => {
  return record.id || String(record.id);
};
