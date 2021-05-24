import React from 'react';

const ProductContainer = (props) =>{
    
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                
                </tr>
            </thead>
            {props.mapProduct}
        </table>
    );
}
export default ProductContainer;