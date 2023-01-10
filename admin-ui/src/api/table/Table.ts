import { AdminOwner } from "../adminOwner/AdminOwner";
import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";

export type Table = {
  adminOwner?: AdminOwner | null;
  createdAt: Date;
  customerId: string | null;
  customers?: Customer | null;
  id: string;
  itemId?: Array<Item>;
  orderId: string | null;
  tableNumber: number | null;
  tableTime: string | null;
  totalPeople: string | null;
  updatedAt: Date;
};
