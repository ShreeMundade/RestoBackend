import { E46 as TE46 } from "../api/e46/E46";

export const E46_TITLE_FIELD = "id";

export const E46Title = (record: TE46): string => {
  return record.id || String(record.id);
};
