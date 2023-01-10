import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  state?: SortOrder;
  tableId?: SortOrder;
  updatedAt?: SortOrder;
  zipcode?: SortOrder;
};
