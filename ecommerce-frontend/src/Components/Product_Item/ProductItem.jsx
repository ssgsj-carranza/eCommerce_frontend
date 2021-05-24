import React, { useState } from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
const ProductItem = (props) => {
    const [reviews, setReviews] = useState();
    
    


    return(//FIXME FORMAT TABLE Format individual product item for Seller to see.
        <div>
            <div>{props.product.Name}</div> 
            <div>{props.product.Price} </div>
            <div>{props.product.Description} </div>
            <div>{props.product.Category}</div>
            <ReviewContainer reviews={props.reviews}/>
        </div>
    )
}
export default ProductItem;