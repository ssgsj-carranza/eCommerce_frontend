import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import Header from '../header/Header'
import {getProducts} from '../services/Service';
import ProductItem from '../Product_Item/ProductItem';  
import PostProduct from '../postProduct/postProduct';
import ProductContainer from '../productContainer/productContainer'

class Seller extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                id: 1,
                Name: 'Bananas butter',
                Price: 150,
                Category: 'Fruit Butters',
                Description: 'A fruity cholesterol sensation'
            }],
            mappedProducts: null,
            reviews: [{
                Rating: 0,
                Text: '',
                UserID:1,
                User:{
                    username: 'JayJ'
                },
                ProductId: 1,
                Product:{
                    id: 1,
                    Name: 'Bananas butter',
                    Price: 150,
                    Category: 'Fruit Butters',
                    Description: 'A fruity cholesterol sensation'
                }
            }],
        }
    }
    componentDidMount(){//get reviews and products
        //axios.get(products)
        //axios.get(reviews)
        let renderedProducts = this.mapProducts();
        this.setState({mappedProducts: renderedProducts});
    }
    mapProducts(){
        const products = this.state.products;
        
        return products.map(product =>{
            let productReviews = this.state.reviews.filter(review =>{
                return review.ProductId === product.id
            })//DO NOT DO THIS EVER AGAIN IN THE FUTURE MAKE A POST REQUES TO API TO QUERY.
            return(
            <ProductItem product={product} key={product.id} reviews={productReviews}/>
            )
        });
    }
    
    render(){//FIXME Table not rendering properly
        return(
            <div>
                <Header />
                <ProductContainer products={this.state.mappedProducts}/>
                {/* <Table> 
                    {this.mapProducts()}
                </Table> */}
                <PostProduct />

                
            </div>
        )
    }
}
export default Seller;