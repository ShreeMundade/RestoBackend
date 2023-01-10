import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AdminOwnerTitle } from "../adminOwner/AdminOwnerTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ItemTitle } from "../item/ItemTitle";

export const TableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="adminowner.id"
          reference="AdminOwner"
          label="AdminOwner"
        >
          <SelectInput optionText={AdminOwnerTitle} />
        </ReferenceInput>
        <TextInput label="Customer_ID" source="customerId" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customers"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="itemId"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Order_ID" source="orderId" />
        <NumberInput step={1} label="  Table Number" source="tableNumber" />
        <TextInput label="TableTime" source="tableTime" />
        <TextInput label="Total_People" source="totalPeople" />
      </SimpleForm>
    </Create>
  );
};
