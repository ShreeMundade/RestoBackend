import { AdminOwnerWhereUniqueInput } from "../adminOwner/AdminOwnerWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutTablesInput } from "./ItemUpdateManyWithoutTablesInput";

export type TableUpdateInput = {
  adminOwner?: AdminOwnerWhereUniqueInput | null;
  customerId?: string | null;
  customers?: CustomerWhereUniqueInput | null;
  itemId?: ItemUpdateManyWithoutTablesInput;
  orderId?: string | null;
  tableNumber?: number | null;
  tableTime?: string | null;
  totalPeople?: string | null;
};
