import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StaffWhereUniqueInput } from "../staff/StaffWhereUniqueInput";

export type FeedbackWhereInput = {
  customerId?: CustomerWhereUniqueInput;
  id?: StringFilter;
  itemRating?: StringNullableFilter;
  staffId?: StringNullableFilter;
  staffRating?: StringNullableFilter;
  staffs?: StaffWhereUniqueInput;
};
