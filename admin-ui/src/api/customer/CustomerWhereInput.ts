import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdminOwnerListRelationFilter } from "../adminOwner/AdminOwnerListRelationFilter";
import { BillListRelationFilter } from "../bill/BillListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DineOrderListRelationFilter } from "../dineOrder/DineOrderListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  adminOwners?: AdminOwnerListRelationFilter;
  bills?: BillListRelationFilter;
  country?: StringNullableFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  order?: DineOrderListRelationFilter;
  password?: StringNullableFilter;
  phone?: IntFilter;
  state?: StringNullableFilter;
  table?: TableWhereUniqueInput;
  zipcode?: StringNullableFilter;
};
