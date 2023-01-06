import { E69 as TE69 } from "../api/e69/E69";

export const E69_TITLE_FIELD = "id";

export const E69Title = (record: TE69): string => {
  return record.id || String(record.id);
};
