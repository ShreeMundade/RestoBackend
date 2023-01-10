import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AdminOwnerTitle } from "../adminOwner/AdminOwnerTitle";
import { DineOrderTitle } from "../dineOrder/DineOrderTitle";
import { StaffTitle } from "../staff/StaffTitle";

export const KitchenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adminOwners"
          reference="AdminOwner"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdminOwnerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dineorder"
          reference="DineOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DineOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="staff"
          reference="Staff"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StaffTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
