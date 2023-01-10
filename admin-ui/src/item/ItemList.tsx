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
import { DINEORDER_TITLE_FIELD } from "../dineOrder/DineOrderTitle";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Items"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
