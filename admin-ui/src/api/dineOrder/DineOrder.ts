import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { Kitchen } from "../kitchen/Kitchen";
import { Parcel } from "../parcel/Parcel";

export type DineOrder = {
  amount: number;
  createdAt: Date;
  customer?: Customer | null;
  id: number;
  items?: Array<Item>;
  kitchens?: Array<Kitchen>;
  numberOfItems: number;
  parcels?: Parcel | null;
  time: Date;
  updatedAt: Date;
};
