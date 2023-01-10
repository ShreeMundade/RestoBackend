import { AdminOwnerUpdateManyWithoutStaffInput } from "./AdminOwnerUpdateManyWithoutStaffInput";
import { KitchenWhereUniqueInput } from "../kitchen/KitchenWhereUniqueInput";
import { FeedbackUpdateManyWithoutStaffInput } from "./FeedbackUpdateManyWithoutStaffInput";

export type StaffUpdateInput = {
  adminOwners?: AdminOwnerUpdateManyWithoutStaffInput;
  email?: string | null;
  kitchens?: KitchenWhereUniqueInput | null;
  name?: string | null;
  password?: string | null;
  phone?: string | null;
  rating?: FeedbackUpdateManyWithoutStaffInput;
};
