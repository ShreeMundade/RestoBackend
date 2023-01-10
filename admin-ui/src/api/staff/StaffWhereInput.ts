import { AdminOwnerListRelationFilter } from "../adminOwner/AdminOwnerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KitchenWhereUniqueInput } from "../kitchen/KitchenWhereUniqueInput";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";

export type StaffWhereInput = {
  adminOwners?: AdminOwnerListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  kitchens?: KitchenWhereUniqueInput;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  rating?: FeedbackListRelationFilter;
};
