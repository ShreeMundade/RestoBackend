import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutAdminOwnersInput } from "./ItemUpdateManyWithoutAdminOwnersInput";
import { KitchenWhereUniqueInput } from "../kitchen/KitchenWhereUniqueInput";
import { StaffUpdateManyWithoutAdminOwnersInput } from "./StaffUpdateManyWithoutAdminOwnersInput";
import { TableUpdateManyWithoutAdminOwnersInput } from "./TableUpdateManyWithoutAdminOwnersInput";

export type AdminOwnerUpdateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  item?: ItemUpdateManyWithoutAdminOwnersInput;
  kitchen?: KitchenWhereUniqueInput | null;
  password?: string | null;
  phone?: string | null;
  role?: string | null;
  staff?: StaffUpdateManyWithoutAdminOwnersInput;
  tables?: TableUpdateManyWithoutAdminOwnersInput;
};
