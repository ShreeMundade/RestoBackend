import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const E1Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
      </SimpleForm>
    </Edit>
  );
};
