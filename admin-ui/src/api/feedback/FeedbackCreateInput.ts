import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StaffWhereUniqueInput } from "../staff/StaffWhereUniqueInput";

export type FeedbackCreateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  itemRating?: string | null;
  staffId?: string | null;
  staffRating?: string | null;
  staffs?: StaffWhereUniqueInput | null;
};
