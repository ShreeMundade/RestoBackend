import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  payementType?: StringNullableFilter;
  time?: DateTimeNullableFilter;
};
