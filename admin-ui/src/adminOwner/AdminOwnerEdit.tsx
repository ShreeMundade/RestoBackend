import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { ItemTitle } from "../item/ItemTitle";
import { KitchenTitle } from "../kitchen/KitchenTitle";
import { StaffTitle } from "../staff/StaffTitle";
import { TableTitle } from "../table/TableTitle";

export const AdminOwnerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="item"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="kitchen.id" reference="Kitchen" label="Kitchen">
          <SelectInput optionText={KitchenTitle} />
        </ReferenceInput>
        <TextInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Role" source="role" />
        <ReferenceArrayInput
          source="staff"
          reference="Staff"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StaffTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tables"
          reference="Table"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TableTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
