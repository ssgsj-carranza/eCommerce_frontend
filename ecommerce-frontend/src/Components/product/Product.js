import React from 'react';
import {useStateValue} from '../contextAPI/StateProvider';
import {segment, Button, Title} from 'semantic-ui-react';
// import Icon from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//npm install @material-ui/lab @material-ui/core @material-ui/icons
//ADD TO SHOOPINGCART corresponds to the object action in reducer, which updates the state with the new object that is added to basket
function Product({Name, Price, Description, Category}) {
    const [{}, dispatch] = useStateValue();
    
    const addToShoppingcart = () => {
        dispatch({
            type: "ADD_TO_SHOPPINGCART",
            item:{
                Name,
                Price,
                Description,
                Category
            }
        })
    };
    let value = '';
    let setValue = () =>{};
    let title = 'hi';
    return (
        <div className="product">
            <div className="product-info">
                {/* <Title>{title}</Title> */}
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Controlled</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                         }}
                    />
                </Box>
                {/* <div className="product-rating">
                    {Array(rating).fill().map((index) => (
                        <Icon key={index} class="fa fa-star"></Icon>
                    ))}
                </div> */}
            </div>
            <Button color="blue" onClick={addToShoppingcart}>Add to cart</Button>
        </div>
    )
}

export default Product;