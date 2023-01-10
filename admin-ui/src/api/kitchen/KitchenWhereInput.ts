import { AdminOwnerListRelationFilter } from "../adminOwner/AdminOwnerListRelationFilter";
import { DineOrderListRelationFilter } from "../dineOrder/DineOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StaffListRelationFilter } from "../staff/StaffListRelationFilter";

export type KitchenWhereInput = {
  adminOwners?: AdminOwnerListRelationFilter;
  dineorder?: DineOrderListRelationFilter;
  id?: StringFilter;
  staff?: StaffListRelationFilter;
};
