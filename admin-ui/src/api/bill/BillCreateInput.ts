import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type BillCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
};
