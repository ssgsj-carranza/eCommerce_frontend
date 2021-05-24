import React, { useState } from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
const ProductItem = (props) => {
    // const [reviews, setReviews] = useState();
    
    

console.log(props.product.Name, "props.product.Name")
    return(//FIXME FORMAT TABLE Format individual product item for Seller to see.
        <div>
                    hello
                    {props.product.Name}
                    {props.product.Price} 
                    {props.product.Description} 
                    {props.product.Category}
                    {/* <ReviewContainer reviews={props.reviews}/> */}
          
        </div>
    )
}
export default ProductItem;