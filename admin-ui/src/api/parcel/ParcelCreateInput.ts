import { DineOrderWhereUniqueInput } from "../dineOrder/DineOrderWhereUniqueInput";

export type ParcelCreateInput = {
  customerId?: string | null;
  dineorder?: DineOrderWhereUniqueInput | null;
  orderId?: string | null;
};
