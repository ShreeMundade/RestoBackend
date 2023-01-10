import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type BillUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
};
