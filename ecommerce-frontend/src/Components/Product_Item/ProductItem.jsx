import React from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
import {useState} from 'react';
import { Card } from 'semantic-ui-react'
import ReviewItem from '../reviewItem/reviewItem';
const ProductItem = (props) => {
    

console.log(props.product.name, "props.product.Name")
    return(
        <div className='ui container'>
            <Card>
            <Card.Content>
                <Card.Meta>
                    {props.product.name}
                    <div>
                    Price: ${props.product.price}
                    </div>
                </Card.Meta>
                <Card.Description>
                {props.product.category.name}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {props.product.description}
            </Card.Content>
            </Card>
            <ReviewContainer review={props.reviews} user={props.user} product={props.product}/>
        </div>
    )
}
export default ProductItem;