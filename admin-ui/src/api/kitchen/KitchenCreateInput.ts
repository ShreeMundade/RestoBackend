import { AdminOwnerCreateNestedManyWithoutKitchensInput } from "./AdminOwnerCreateNestedManyWithoutKitchensInput";
import { DineOrderCreateNestedManyWithoutKitchensInput } from "./DineOrderCreateNestedManyWithoutKitchensInput";
import { StaffCreateNestedManyWithoutKitchensInput } from "./StaffCreateNestedManyWithoutKitchensInput";

export type KitchenCreateInput = {
  adminOwners?: AdminOwnerCreateNestedManyWithoutKitchensInput;
  dineorder?: DineOrderCreateNestedManyWithoutKitchensInput;
  staff?: StaffCreateNestedManyWithoutKitchensInput;
};
