import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';


const ShoppingCartContainer = (props) =>{
    console.log(props.shoppingCarts)
    return(//styling of shopping cart items go here
        <div>
            <Card.Group>
            {props.shoppingCarts}
            </Card.Group>
        </div>
    )
}
export default ShoppingCartContainer;