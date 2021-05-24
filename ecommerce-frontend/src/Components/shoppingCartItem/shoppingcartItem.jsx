import React from 'react';
import {Card} from 'semantic-ui-react'

const ShoppingCartItem = (props) =>{
    return(
        <div>
            <Card>
            <Card.Content>
                <Card.Meta>
                    {props.shoppingCart.product.name}
                    <div>
                        Total: {props.shoppingCart.quantity}
                    </div>
                    
                </Card.Meta>
                <Card.Description>
                    {props.shoppingCart.product.category.name}
                    <div>
                    Price: ${props.shoppingCart.product.price * props.shoppingCart.quantity}
                    </div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {props.shoppingCart.product.description}
            </Card.Content>
            </Card>
        </div>
    )
}
export default ShoppingCartItem;