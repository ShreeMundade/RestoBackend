import { AdminOwnerCreateNestedManyWithoutCustomersInput } from "./AdminOwnerCreateNestedManyWithoutCustomersInput";
import { BillCreateNestedManyWithoutCustomersInput } from "./BillCreateNestedManyWithoutCustomersInput";
import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { DineOrderCreateNestedManyWithoutCustomersInput } from "./DineOrderCreateNestedManyWithoutCustomersInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type CustomerCreateInput = {
  address?: string | null;
  adminOwners?: AdminOwnerCreateNestedManyWithoutCustomersInput;
  bills?: BillCreateNestedManyWithoutCustomersInput;
  country?: string | null;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  name: string;
  order?: DineOrderCreateNestedManyWithoutCustomersInput;
  password?: string | null;
  phone: number;
  state?: string | null;
  table?: TableWhereUniqueInput | null;
  zipcode?: string | null;
};
