import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  kitchensId?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
