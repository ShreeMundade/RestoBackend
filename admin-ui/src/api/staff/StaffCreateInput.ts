import { AdminOwnerCreateNestedManyWithoutStaffInput } from "./AdminOwnerCreateNestedManyWithoutStaffInput";
import { KitchenWhereUniqueInput } from "../kitchen/KitchenWhereUniqueInput";
import { FeedbackCreateNestedManyWithoutStaffInput } from "./FeedbackCreateNestedManyWithoutStaffInput";

export type StaffCreateInput = {
  adminOwners?: AdminOwnerCreateNestedManyWithoutStaffInput;
  email?: string | null;
  kitchens?: KitchenWhereUniqueInput | null;
  name?: string | null;
  password?: string | null;
  phone?: string | null;
  rating?: FeedbackCreateNestedManyWithoutStaffInput;
};
