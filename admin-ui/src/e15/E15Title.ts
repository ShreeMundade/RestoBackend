import { E15 as TE15 } from "../api/e15/E15";

export const E15_TITLE_FIELD = "id";

export const E15Title = (record: TE15): string => {
  return record.id || String(record.id);
};
