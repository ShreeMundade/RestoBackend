import { E26 as TE26 } from "../api/e26/E26";

export const E26_TITLE_FIELD = "id";

export const E26Title = (record: TE26): string => {
  return record.id || String(record.id);
};
