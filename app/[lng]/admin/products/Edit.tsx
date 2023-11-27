import { Edit, ListButton, SimpleForm, TextInput, TopToolbar, required } from "react-admin";

const ProductEdit = () => {

  const PostEditActions = () => (
    <TopToolbar>
      {/* <ShowButton /> */}
      {/* Add your custom actions */}
      <ListButton />
      {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
    </TopToolbar>
  );
  
  return (
    <Edit actions={<PostEditActions/>} >
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="item.name" validate={required()} />
        <TextInput source="item.price" validate={required()} />
        <TextInput source="item.description" validate={required()} />
      </SimpleForm>
    </Edit>
  );
}

export default ProductEdit;