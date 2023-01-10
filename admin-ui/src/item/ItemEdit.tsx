import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AdminOwnerTitle } from "../adminOwner/AdminOwnerTitle";
import { DineOrderTitle } from "../dineOrder/DineOrderTitle";
import { TableTitle } from "../table/TableTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="adminowner.id"
          reference="AdminOwner"
          label="AdminOwners"
        >
          <SelectInput optionText={AdminOwnerTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="Catagory"
          source="catagory"
          choices={[
            { label: "Chinese", value: "Chinese" },
            { label: "Japanese", value: "Japanese" },
            { label: "italian", value: "Italian" },
            { label: "South Indian", value: "SouthIndian" },
            { label: "Indian", value: "Indian" },
            { label: "Soups", value: "Soups" },
            { label: "Starter", value: "Starter" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="dineorder.id"
          reference="DineOrder"
          label="DineOrder"
        >
          <SelectInput optionText={DineOrderTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="itemName" />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="table.id" reference="Table" label="Tables">
          <SelectInput optionText={TableTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
