import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  payementType?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
