import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { Kitchen } from "../kitchen/Kitchen";
import { Staff } from "../staff/Staff";
import { Table } from "../table/Table";

export type AdminOwner = {
  address: string | null;
  createdAt: Date;
  customer?: Customer | null;
  email: string | null;
  id: string;
  item?: Array<Item>;
  kitchen?: Kitchen | null;
  password: string | null;
  phone: string | null;
  role: string | null;
  staff?: Array<Staff>;
  tables?: Array<Table>;
  updatedAt: Date;
};
