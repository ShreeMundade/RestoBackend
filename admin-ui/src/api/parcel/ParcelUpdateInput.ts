import { DineOrderWhereUniqueInput } from "../dineOrder/DineOrderWhereUniqueInput";

export type ParcelUpdateInput = {
  customerId?: string | null;
  dineorder?: DineOrderWhereUniqueInput | null;
  orderId?: string | null;
};
