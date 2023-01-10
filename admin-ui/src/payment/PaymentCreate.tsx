import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="PayementType" source="payementType" />
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Create>
  );
};
