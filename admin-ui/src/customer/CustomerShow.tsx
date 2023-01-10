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

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { KITCHEN_TITLE_FIELD } from "../kitchen/KitchenTitle";
import { STAFF_TITLE_FIELD } from "../staff/StaffTitle";
import { PARCEL_TITLE_FIELD } from "../parcel/ParcelTitle";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Phone" source="phone" />
        <TextField label="State" source="state" />
        <ReferenceField label="Table" source="table.id" reference="Table">
          <TextField source={TABLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zipcode" source="zipcode" />
        <ReferenceManyField
          reference="AdminOwner"
          target="CustomerId"
          label="AdminOwners"
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
            <ReferenceField
              label="Kitchen"
              source="kitchen.id"
              reference="Kitchen"
            >
              <TextField source={KITCHEN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Password" source="password" />
            <TextField label="Phone" source="phone" />
            <TextField label="Role" source="role" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Bill" target="CustomerId" label="Bills">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Feedback"
          target="CustomerId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer_ID"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Item_rating" source="itemRating" />
            <TextField label="Staff_ID" source="staffId" />
            <TextField label="Staff_rating" source="staffRating" />
            <ReferenceField label="Staffs" source="staff.id" reference="Staff">
              <TextField source={STAFF_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DineOrder"
          target="CustomerId"
          label="DineOrders"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Parcels"
              source="parcel.id"
              reference="Parcel"
            >
              <TextField source={PARCEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time" source="time" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
