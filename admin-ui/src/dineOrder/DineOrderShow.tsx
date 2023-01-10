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

import { ADMINOWNER_TITLE_FIELD } from "../adminOwner/AdminOwnerTitle";
import { DINEORDER_TITLE_FIELD } from "./DineOrderTitle";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { PARCEL_TITLE_FIELD } from "../parcel/ParcelTitle";

export const DineOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NumberOfItems" source="numberOfItems" />
        <ReferenceField label="Parcels" source="parcel.id" reference="Parcel">
          <TextField source={PARCEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Item" target="DineOrderId" label="Items">
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
      </SimpleShowLayout>
    </Show>
  );
};
