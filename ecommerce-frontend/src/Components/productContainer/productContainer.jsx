import React from 'react';
import { Card } from 'semantic-ui-react';

const ProductContainer = (props) =>{
    
    return(
        <div className='ui container'>
            <Card.Group>
            {props.mapProduct}
            </Card.Group>
        </div>
    )
}
export default ProductContainer;