import { E51 as TE51 } from "../api/e51/E51";

export const E51_TITLE_FIELD = "id";

export const E51Title = (record: TE51): string => {
  return record.id || String(record.id);
};
