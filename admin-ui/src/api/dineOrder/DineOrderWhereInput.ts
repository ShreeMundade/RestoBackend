import { FloatFilter } from "../../util/FloatFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { KitchenListRelationFilter } from "../kitchen/KitchenListRelationFilter";
import { ParcelWhereUniqueInput } from "../parcel/ParcelWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type DineOrderWhereInput = {
  amount?: FloatFilter;
  customer?: CustomerWhereUniqueInput;
  id?: IntFilter;
  items?: ItemListRelationFilter;
  kitchens?: KitchenListRelationFilter;
  numberOfItems?: IntFilter;
  parcels?: ParcelWhereUniqueInput;
  time?: DateTimeFilter;
};
