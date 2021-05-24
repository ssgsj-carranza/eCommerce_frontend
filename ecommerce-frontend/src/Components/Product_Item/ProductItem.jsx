import React from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
import {Card} from 'semantic-ui-react'
const ProductItem = (props) => {
    // const [reviews, setReviews] = useState();
    
    

console.log(props.product.name, "props.product.Name")
    return(//FIXME FORMAT TABLE Format individual product item for Seller to see.
        <div>
            <Card>
            <Card.Content>
                <Card.Header textAlign='center'>
                    {props.shoppingCart.product.name}
                </Card.Header>
                <Card.Meta>Total: {props.shoppingCart.quantity}</Card.Meta>
                <Card.Description>
                {props.shoppingCart.product.category.name}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {props.shoppingCart.product.description}
            </Card.Content>
            </Card>
        </div>
    )
}
export default ProductItem;