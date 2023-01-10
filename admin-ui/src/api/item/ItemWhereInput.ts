import { AdminOwnerWhereUniqueInput } from "../adminOwner/AdminOwnerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DineOrderWhereUniqueInput } from "../dineOrder/DineOrderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type ItemWhereInput = {
  adminOwners?: AdminOwnerWhereUniqueInput;
  description?: StringNullableFilter;
  dineOrder?: DineOrderWhereUniqueInput;
  id?: StringFilter;
  itemName?: StringFilter;
  price?: FloatFilter;
  quantity?: IntNullableFilter;
  tables?: TableWhereUniqueInput;
};
