import React from 'react';
import {postProduct} from '../services/Service';
import {Form, Label, Button, FormInput } from 'semantic-ui-react';
import { UseForm } from '../forms/UseForm'


const PostProduct = () => {
    const [newProduct, setNewProduct] = UseForm({
        Name: '',
        Price: 0,
        Description: '',
        CategoryId: 1 //TODO Foreign key? Make a dropdown of available choices then when clicked modify to appropriate choice.
    });


    const addNewProduct = (newProduct) => {
        postProduct(newProduct);
    }

    return (
        <Form>
            <Label>
                Name:
                <FormInput
                    type="text"
                    name="Name"
                    value={newProduct.Name}
                    onChange={setNewProduct}
                    placeholder='Enter the Product Name'
                />
                <br />
                Price:
                <FormInput
                    type="number"
                    name="Price"
                    value={newProduct.Price}
                    onChange={setNewProduct}
                />
                <br />
                Description:
                <FormInput
                    type="text"
                    name="Description"
                    value={newProduct.Description}
                    onChange={setNewProduct}
                    placeholder='Describe'
                />
                <br />
            </Label>
            <Button primary color="blue" onClick={() => addNewProduct(newProduct)}>
                Add Product
            </Button>
        </Form>
    );
}

export default PostProduct;