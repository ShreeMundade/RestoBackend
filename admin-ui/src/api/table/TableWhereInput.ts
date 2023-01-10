import { AdminOwnerWhereUniqueInput } from "../adminOwner/AdminOwnerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TableWhereInput = {
  adminOwner?: AdminOwnerWhereUniqueInput;
  customerId?: StringNullableFilter;
  customers?: CustomerWhereUniqueInput;
  id?: StringFilter;
  itemId?: ItemListRelationFilter;
  orderId?: StringNullableFilter;
  tableNumber?: IntNullableFilter;
  tableTime?: StringNullableFilter;
  totalPeople?: StringNullableFilter;
};
