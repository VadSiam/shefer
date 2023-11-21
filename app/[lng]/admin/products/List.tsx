"use client"

import { BooleanField, CreateButton, Datagrid, DateField, EditButton, ExportButton, FilterButton, List, SelectColumnsButton, ShowButton, TextField, TopToolbar } from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    {/* <FilterButton /> */}
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const ProductsList = () => (
  <List actions={<ListActions />} >
    <Datagrid>
      <TextField source="id" />
      <TextField source="item.name" />
      <TextField source="item.price" />
      <TextField source="item.description" />
      <>
        <EditButton />
        <ShowButton />
      </>
      <DateField source="created_at" locales="fr-FR" />
    </Datagrid>
  </List>
);

export default ProductsList;