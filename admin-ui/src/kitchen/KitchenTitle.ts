import { Kitchen as TKitchen } from "../api/kitchen/Kitchen";

export const KITCHEN_TITLE_FIELD = "id";

export const KitchenTitle = (record: TKitchen): string => {
  return record.id || String(record.id);
};
