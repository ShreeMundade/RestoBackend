import * as React from "react";
import { Edit, SimpleForm, EditProps } from "react-admin";

export const E17Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
      </SimpleForm>
    </Edit>
  );
};
