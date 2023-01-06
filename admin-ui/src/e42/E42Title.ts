import { E42 as TE42 } from "../api/e42/E42";

export const E42_TITLE_FIELD = "id";

export const E42Title = (record: TE42): string => {
  return record.id || String(record.id);
};
