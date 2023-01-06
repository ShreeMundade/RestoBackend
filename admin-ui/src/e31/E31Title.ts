import { E31 as TE31 } from "../api/e31/E31";

export const E31_TITLE_FIELD = "id";

export const E31Title = (record: TE31): string => {
  return record.id || String(record.id);
};
