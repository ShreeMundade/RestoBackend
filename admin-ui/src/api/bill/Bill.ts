import { Customer } from "../customer/Customer";

export type Bill = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
