import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADMINOWNER_TITLE_FIELD } from "./AdminOwnerTitle";
import { DINEORDER_TITLE_FIELD } from "../dineOrder/DineOrderTitle";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { KITCHEN_TITLE_FIELD } from "../kitchen/KitchenTitle";

export const AdminOwnerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Item"
          target="AdminOwnerId"
          label="Items"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AdminOwners"
              source="adminowner.id"
              reference="AdminOwner"
            >
              <TextField source={ADMINOWNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Catagory" source="catagory" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="DineOrder"
              source="dineorder.id"
              reference="DineOrder"
            >
              <TextField source={DINEORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="itemName" />
            <TextField label="Price" source="price" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField label="Tables" source="table.id" reference="Table">
              <TextField source={TABLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Table"
          target="AdminOwnerId"
          label="Tables"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AdminOwner"
              source="adminowner.id"
              reference="AdminOwner"
            >
              <TextField source={ADMINOWNER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Customer_ID" source="customerId" />
            <ReferenceField
              label="Customers"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Order_ID" source="orderId" />
            <TextField label="  Table Number" source="tableNumber" />
            <TextField label="TableTime" source="tableTime" />
            <TextField label="Total_People" source="totalPeople" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
