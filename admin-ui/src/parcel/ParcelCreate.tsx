import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DineOrderTitle } from "../dineOrder/DineOrderTitle";

export const ParcelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Customer_ID" source="customerId" />
        <ReferenceInput
          source="dineorder.id"
          reference="DineOrder"
          label="Dineorder"
        >
          <SelectInput optionText={DineOrderTitle} />
        </ReferenceInput>
        <TextInput label="Order_ID" source="orderId" />
      </SimpleForm>
    </Create>
  );
};
