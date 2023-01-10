import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdminOwnerTitle } from "../adminOwner/AdminOwnerTitle";
import { BillTitle } from "../bill/BillTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { DineOrderTitle } from "../dineOrder/DineOrderTitle";
import { TableTitle } from "../table/TableTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="adminOwners"
          reference="AdminOwner"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdminOwnerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bills"
          reference="Bill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillTitle} />
        </ReferenceArrayInput>
        <TextInput label="Country" source="country" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="feedbacks"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="order"
          reference="DineOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DineOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Password" source="password" />
        <NumberInput step={1} label="Phone" source="phone" />
        <TextInput label="State" source="state" />
        <ReferenceInput source="table.id" reference="Table" label="Table">
          <SelectInput optionText={TableTitle} />
        </ReferenceInput>
        <TextInput label="Zipcode" source="zipcode" />
      </SimpleForm>
    </Create>
  );
};
