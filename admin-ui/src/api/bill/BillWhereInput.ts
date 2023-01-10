import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BillWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
