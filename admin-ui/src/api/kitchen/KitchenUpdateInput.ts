import { AdminOwnerUpdateManyWithoutKitchensInput } from "./AdminOwnerUpdateManyWithoutKitchensInput";
import { DineOrderUpdateManyWithoutKitchensInput } from "./DineOrderUpdateManyWithoutKitchensInput";
import { StaffUpdateManyWithoutKitchensInput } from "./StaffUpdateManyWithoutKitchensInput";

export type KitchenUpdateInput = {
  adminOwners?: AdminOwnerUpdateManyWithoutKitchensInput;
  dineorder?: DineOrderUpdateManyWithoutKitchensInput;
  staff?: StaffUpdateManyWithoutKitchensInput;
};
