import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutAdminOwnersInput } from "./ItemCreateNestedManyWithoutAdminOwnersInput";
import { KitchenWhereUniqueInput } from "../kitchen/KitchenWhereUniqueInput";
import { StaffCreateNestedManyWithoutAdminOwnersInput } from "./StaffCreateNestedManyWithoutAdminOwnersInput";
import { TableCreateNestedManyWithoutAdminOwnersInput } from "./TableCreateNestedManyWithoutAdminOwnersInput";

export type AdminOwnerCreateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  item?: ItemCreateNestedManyWithoutAdminOwnersInput;
  kitchen?: KitchenWhereUniqueInput | null;
  password?: string | null;
  phone?: string | null;
  role?: string | null;
  staff?: StaffCreateNestedManyWithoutAdminOwnersInput;
  tables?: TableCreateNestedManyWithoutAdminOwnersInput;
};
