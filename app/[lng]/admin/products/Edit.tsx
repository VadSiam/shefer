import { Edit, SimpleForm, TextInput, required } from "react-admin";

const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="item.name" validate={required()} />
      <TextInput source="item.price" validate={required()} />
      <TextInput source="item.description" validate={required()} />
      {/* <TextInput multiline source="teaser" validate={required()} /> */}
      {/* <RichTextInput source="body" validate={required()} />
      <DateInput label="Publication date" source="published_at" />
      <ReferenceManyField label="Comments" reference="comments" target="post_id">
        <Datagrid>
          <TextField source="body" />
          <DateField source="created_at" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField> */}
    </SimpleForm>
  </Edit>
);

export default ProductEdit;