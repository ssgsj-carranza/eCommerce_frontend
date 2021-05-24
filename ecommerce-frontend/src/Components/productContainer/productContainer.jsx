import React from 'react';
import ProductList from '../productList/productList';

const ProductContainer = (props) =>{
    console.log(props.mapProduct, "mapProduct")
    return(
        <div>
            <ProductList mappedProduct = {props.mapProduct}/>
        </div>
    )
}
export default ProductContainer;