import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdminOwnerTitle } from "../adminOwner/AdminOwnerTitle";
import { KitchenTitle } from "../kitchen/KitchenTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adminOwners"
          reference="AdminOwner"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdminOwnerTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="kitchen.id"
          reference="Kitchen"
          label="Kitchens"
        >
          <SelectInput optionText={KitchenTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="rating"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
