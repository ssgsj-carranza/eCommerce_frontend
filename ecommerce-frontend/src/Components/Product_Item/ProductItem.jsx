import React, { useState } from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
const ProductItem = (props) => {
    const [reviews, setReviews] = useState();
    
    


    return(//FIXME FORMAT TABLE Format individual product item for Seller to see.
        <div>
            <td>{props.product.Name}</td> 
            <td>{props.product.Price} </td>
            <td>{props.product.Description} </td>
            <td>{props.product.Category}</td>
            <ReviewContainer reviews={props.reviews}/>
        </div>
    )
}
export default ProductItem;