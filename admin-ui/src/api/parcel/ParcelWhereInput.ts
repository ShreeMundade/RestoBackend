import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DineOrderWhereUniqueInput } from "../dineOrder/DineOrderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ParcelWhereInput = {
  customerId?: StringNullableFilter;
  dineorder?: DineOrderWhereUniqueInput;
  id?: StringFilter;
  orderId?: StringNullableFilter;
};
