import { Customer } from "../customer/Customer";
import { Staff } from "../staff/Staff";

export type Feedback = {
  createdAt: Date;
  customerId?: Customer | null;
  id: string;
  itemRating: string | null;
  staffId: string | null;
  staffRating: string | null;
  staffs?: Staff | null;
  updatedAt: Date;
};
