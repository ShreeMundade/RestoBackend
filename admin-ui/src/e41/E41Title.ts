import { E41 as TE41 } from "../api/e41/E41";

export const E41_TITLE_FIELD = "id";

export const E41Title = (record: TE41): string => {
  return record.id || String(record.id);
};
