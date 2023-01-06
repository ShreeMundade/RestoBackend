import { E64 as TE64 } from "../api/e64/E64";

export const E64_TITLE_FIELD = "id";

export const E64Title = (record: TE64): string => {
  return record.id || String(record.id);
};
