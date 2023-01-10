import { DineOrder } from "../dineOrder/DineOrder";

export type Parcel = {
  createdAt: Date;
  customerId: string | null;
  dineorder?: DineOrder | null;
  id: string;
  orderId: string | null;
  updatedAt: Date;
};
