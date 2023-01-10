import { DineOrder as TDineOrder } from "../api/dineOrder/DineOrder";

export const DINEORDER_TITLE_FIELD = "id";

export const DineOrderTitle = (record: TDineOrder): string => {
  return record.id || String(record.id);
};
