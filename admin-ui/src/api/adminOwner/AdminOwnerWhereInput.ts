import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { KitchenWhereUniqueInput } from "../kitchen/KitchenWhereUniqueInput";
import { StaffListRelationFilter } from "../staff/StaffListRelationFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type AdminOwnerWhereInput = {
  address?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  item?: ItemListRelationFilter;
  kitchen?: KitchenWhereUniqueInput;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  role?: StringNullableFilter;
  staff?: StaffListRelationFilter;
  tables?: TableListRelationFilter;
};
