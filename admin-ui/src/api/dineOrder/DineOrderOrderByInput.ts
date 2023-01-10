import { SortOrder } from "../../util/SortOrder";

export type DineOrderOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  numberOfItems?: SortOrder;
  parcelsId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
