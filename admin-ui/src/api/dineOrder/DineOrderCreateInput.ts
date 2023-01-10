import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutDineOrdersInput } from "./ItemCreateNestedManyWithoutDineOrdersInput";
import { KitchenCreateNestedManyWithoutDineOrdersInput } from "./KitchenCreateNestedManyWithoutDineOrdersInput";
import { ParcelWhereUniqueInput } from "../parcel/ParcelWhereUniqueInput";

export type DineOrderCreateInput = {
  amount: number;
  customer?: CustomerWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutDineOrdersInput;
  kitchens?: KitchenCreateNestedManyWithoutDineOrdersInput;
  numberOfItems: number;
  parcels?: ParcelWhereUniqueInput | null;
  time: Date;
};
