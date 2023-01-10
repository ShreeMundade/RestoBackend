import { AdminOwnerWhereUniqueInput } from "../adminOwner/AdminOwnerWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutTablesInput } from "./ItemCreateNestedManyWithoutTablesInput";

export type TableCreateInput = {
  adminOwner?: AdminOwnerWhereUniqueInput | null;
  customerId?: string | null;
  customers?: CustomerWhereUniqueInput | null;
  itemId?: ItemCreateNestedManyWithoutTablesInput;
  orderId?: string | null;
  tableNumber?: number | null;
  tableTime?: string | null;
  totalPeople?: string | null;
};
