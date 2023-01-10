import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
