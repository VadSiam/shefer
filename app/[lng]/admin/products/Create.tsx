import { Create, DateInput, SimpleForm, TextInput, required } from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="item.name" validate={[required()]} fullWidth />
      <TextInput source="item.price" validate={[required()]} fullWidth />
      <TextInput
        source="item.description"
        multiline={true}
        label="Short description"
        fullWidth
      />
    </SimpleForm>
  </Create>
);