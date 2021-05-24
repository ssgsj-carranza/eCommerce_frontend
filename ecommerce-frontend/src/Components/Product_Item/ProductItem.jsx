import React, { useState } from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
const ProductItem = (props) => {
    // const [reviews, setReviews] = useState();
    
    

console.log(props.product.name, "props.product.Name")
    return(//FIXME FORMAT TABLE Format individual product item for Seller to see.
        <div>
            <tbody>
              <tr>    
                <td>{props.product.name}</td>
                <td>{props.product.price}</td> 
                <td>{props.product.description}</td> 
                <td>{props.product.category}</td>
                   
                </tr>  
            </tbody>
        </div>
    )
}
export default ProductItem;