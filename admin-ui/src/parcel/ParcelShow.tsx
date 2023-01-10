import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DINEORDER_TITLE_FIELD } from "../dineOrder/DineOrderTitle";

export const ParcelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer_ID" source="customerId" />
        <ReferenceField
          label="Dineorder"
          source="dineorder.id"
          reference="DineOrder"
        >
          <TextField source={DINEORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Order_ID" source="orderId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
