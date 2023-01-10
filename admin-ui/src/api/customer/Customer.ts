import { AdminOwner } from "../adminOwner/AdminOwner";
import { Bill } from "../bill/Bill";
import { Feedback } from "../feedback/Feedback";
import { DineOrder } from "../dineOrder/DineOrder";
import { Table } from "../table/Table";

export type Customer = {
  address: string | null;
  adminOwners?: Array<AdminOwner>;
  bills?: Array<Bill>;
  country: string | null;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string;
  order?: Array<DineOrder>;
  password: string | null;
  phone: number;
  state: string | null;
  table?: Table | null;
  updatedAt: Date;
  zipcode: string | null;
};
