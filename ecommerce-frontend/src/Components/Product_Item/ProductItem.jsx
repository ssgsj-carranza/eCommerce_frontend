import React, { useState } from 'react';
import ReviewContainer from '../reviewContainer/reviewContainer';
const ProductItem = (props) => {
    // const [reviews, setReviews] = useState();
    
    

console.log(props.product.Name, "props.product.Name")
    return(//FIXME FORMAT TABLE Format individual product item for Seller to see.
        <div>
<<<<<<< HEAD
            <div>{props.product.Name}</div> 
            <div>{props.product.Price} </div>
            <div>{props.product.Description} </div>
            <div>{props.product.Category}</div>
            <ReviewContainer reviews={props.reviews}/>
=======
                    hello
                    {props.product.Name}
                    {props.product.Price} 
                    {props.product.Description} 
                    {props.product.Category}
                    {/* <ReviewContainer reviews={props.reviews}/> */}
          
>>>>>>> 14dde00e4f0d1895eeae0c60145f47a600be2e4d
        </div>
    )
}
export default ProductItem;