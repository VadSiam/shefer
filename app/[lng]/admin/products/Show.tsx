import { DateField, RichTextField, Show, SimpleShowLayout, TextField } from "react-admin";

const ProductShow = () => (
  <Show>
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="item.name" />
        <TextField source="item.price" />
        <RichTextField source="item.description" />
        <DateField label="Created date" source="created_at" />
      </SimpleShowLayout>
    </Show>
  </Show>
);

export default ProductShow;