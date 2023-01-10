import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADMINOWNER_TITLE_FIELD } from "../adminOwner/AdminOwnerTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const TableList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tables"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
