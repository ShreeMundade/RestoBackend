import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DineOrderTitle } from "../dineOrder/DineOrderTitle";

export const ParcelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
