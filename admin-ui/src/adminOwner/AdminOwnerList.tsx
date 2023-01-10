import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { KITCHEN_TITLE_FIELD } from "../kitchen/KitchenTitle";

export const AdminOwnerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AdminOwners"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Kitchen" source="kitchen.id" reference="Kitchen">
          <TextField source={KITCHEN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Password" source="password" />
        <TextField label="Phone" source="phone" />
        <TextField label="Role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
