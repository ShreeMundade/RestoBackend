import { E32 as TE32 } from "../api/e32/E32";

export const E32_TITLE_FIELD = "id";

export const E32Title = (record: TE32): string => {
  return record.id || String(record.id);
};
