import { E35 as TE35 } from "../api/e35/E35";

export const E35_TITLE_FIELD = "id";

export const E35Title = (record: TE35): string => {
  return record.id || String(record.id);
};
