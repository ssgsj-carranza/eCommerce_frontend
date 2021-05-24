import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import Header from '../header/Header'
import {getProducts} from '../services/Service';
import ProductItem from '../Product_Item/ProductItem';  
import PostProduct from '../postProduct/postProduct';
import ProductContainer from '../productContainer/productContainer'
import Footer from '../Footer/footer';

class Seller extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                id: 1,
                name: 'Bananas butter',
                price: 150,
                category: {
                    name: 'Fruit Butters'
                },
                description: 'A fruity cholesterol sensation',
            },
              {
                id: 2,
                name: 'Bananas butter',
                price: 150,
                category: {
                    name: 'Fruit Butters'
                },
                description: 'A fruity cholesterol sensation',
            }],
            mappedProducts: [],
            reviews: [{
                rating: 0,
                text: '',
                userID: this.props.user.id,
                user: {
                    username: 'JayJ'
                },
                productId: 1,
                product:{
                    id: 1,
                    name: 'Bananas butter',
                    price: 150,
                    category: {
                        name: 'Fruit Butters'
                    },
                    description: 'A fruity cholesterol sensation'
                }
            }],
        }
    }
    componentDidMount(){//get reviews and products
        //axios.get(products)
        //axios.get(reviews)
        let renderedProducts = this.mapProducts();
        this.setState({mappedProducts: renderedProducts});
        console.log(this.state.mappedProducts, 'mappedproducts')
    }
    mapProducts(){
        let products = this.state.products;
        console.log('ive ran')
        return products.map(product =>{
            let productReviews = this.state.reviews.filter(review =>{
                return review.productId === product.id
            });
            return(
            <ProductItem product={product} key={product.id} reviews={productReviews} user={this.props.user}/>
            );
        });
    }
    
    render(){
        return(
            <div>
                <Header />
                <ProductContainer mapProduct={this.state.mappedProducts} />
                <PostProduct />
                <Footer/>
                
            </div>
        )
    }
}
export default Seller;