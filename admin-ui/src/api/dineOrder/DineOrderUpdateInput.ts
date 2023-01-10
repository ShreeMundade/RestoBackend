import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutDineOrdersInput } from "./ItemUpdateManyWithoutDineOrdersInput";
import { KitchenUpdateManyWithoutDineOrdersInput } from "./KitchenUpdateManyWithoutDineOrdersInput";
import { ParcelWhereUniqueInput } from "../parcel/ParcelWhereUniqueInput";

export type DineOrderUpdateInput = {
  amount?: number;
  customer?: CustomerWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutDineOrdersInput;
  kitchens?: KitchenUpdateManyWithoutDineOrdersInput;
  numberOfItems?: number;
  parcels?: ParcelWhereUniqueInput | null;
  time?: Date;
};
