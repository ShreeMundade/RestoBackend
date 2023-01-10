import { AdminOwnerUpdateManyWithoutCustomersInput } from "./AdminOwnerUpdateManyWithoutCustomersInput";
import { BillUpdateManyWithoutCustomersInput } from "./BillUpdateManyWithoutCustomersInput";
import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { DineOrderUpdateManyWithoutCustomersInput } from "./DineOrderUpdateManyWithoutCustomersInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: string | null;
  adminOwners?: AdminOwnerUpdateManyWithoutCustomersInput;
  bills?: BillUpdateManyWithoutCustomersInput;
  country?: string | null;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  name?: string;
  order?: DineOrderUpdateManyWithoutCustomersInput;
  password?: string | null;
  phone?: number;
  state?: string | null;
  table?: TableWhereUniqueInput | null;
  zipcode?: string | null;
};
