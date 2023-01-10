import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  id?: SortOrder;
  itemRating?: SortOrder;
  staffId?: SortOrder;
  staffRating?: SortOrder;
  staffsId?: SortOrder;
  updatedAt?: SortOrder;
};
