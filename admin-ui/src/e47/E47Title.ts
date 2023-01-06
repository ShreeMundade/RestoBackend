import { E47 as TE47 } from "../api/e47/E47";

export const E47_TITLE_FIELD = "id";

export const E47Title = (record: TE47): string => {
  return record.id || String(record.id);
};
