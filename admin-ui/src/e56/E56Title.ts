import { E56 as TE56 } from "../api/e56/E56";

export const E56_TITLE_FIELD = "id";

export const E56Title = (record: TE56): string => {
  return record.id || String(record.id);
};
