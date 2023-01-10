import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { StaffTitle } from "../staff/StaffTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer_ID"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Item_rating" source="itemRating" />
        <TextInput label="Staff_ID" source="staffId" />
        <TextInput label="Staff_rating" source="staffRating" />
        <ReferenceInput source="staff.id" reference="Staff" label="Staffs">
          <SelectInput optionText={StaffTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
