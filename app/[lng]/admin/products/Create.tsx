import { Create, DateInput, SimpleForm, TextInput, required } from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput source="teaser" multiline={true} label="Short description" />
      <TextInput source="body" />
      <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
    </SimpleForm>
  </Create>
);