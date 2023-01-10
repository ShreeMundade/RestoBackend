import { AdminOwner } from "../adminOwner/AdminOwner";
import { DineOrder } from "../dineOrder/DineOrder";
import { Staff } from "../staff/Staff";

export type Kitchen = {
  adminOwners?: Array<AdminOwner>;
  createdAt: Date;
  dineorder?: Array<DineOrder>;
  id: string;
  staff?: Array<Staff>;
  updatedAt: Date;
};
