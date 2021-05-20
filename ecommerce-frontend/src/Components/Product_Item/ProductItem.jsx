import React from 'react';

const ProductItem = (props) => {

    return(
        <div>
            <td>{props.product.Name}</td> 
            <td>{props.product.Price} </td>
            <td>{props.product.Description} </td>
            <td>{props.product.Category}</td>
        </div>
    )
}
export default ProductItem;