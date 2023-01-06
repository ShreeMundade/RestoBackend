import { E27 as TE27 } from "../api/e27/E27";

export const E27_TITLE_FIELD = "id";

export const E27Title = (record: TE27): string => {
  return record.id || String(record.id);
};
