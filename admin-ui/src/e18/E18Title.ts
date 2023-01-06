import { E18 as TE18 } from "../api/e18/E18";

export const E18_TITLE_FIELD = "id";

export const E18Title = (record: TE18): string => {
  return record.id || String(record.id);
};
