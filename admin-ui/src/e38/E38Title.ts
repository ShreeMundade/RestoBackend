import { E38 as TE38 } from "../api/e38/E38";

export const E38_TITLE_FIELD = "id";

export const E38Title = (record: TE38): string => {
  return record.id || String(record.id);
};
