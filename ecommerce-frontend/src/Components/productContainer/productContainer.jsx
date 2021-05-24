import React from 'react';
import ProductList from '../productList/productList';

const ProductContainer = (props) =>{
    
    return(
        <div>
            <ProductList mappedProduct = {props.mapProduct}/>
        </div>
    )
}
export default ProductContainer;