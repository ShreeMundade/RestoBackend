import { AdminOwner } from "../adminOwner/AdminOwner";
import { DineOrder } from "../dineOrder/DineOrder";
import { Table } from "../table/Table";

export type Item = {
  adminOwners?: AdminOwner | null;
  catagory?: Array<
    | "Chinese"
    | "Japanese"
    | "Italian"
    | "SouthIndian"
    | "Indian"
    | "Soups"
    | "Starter"
  >;
  createdAt: Date;
  description: string | null;
  dineOrder?: DineOrder | null;
  id: string;
  itemName: string;
  price: number;
  quantity: number | null;
  tables?: Table | null;
  updatedAt: Date;
};
