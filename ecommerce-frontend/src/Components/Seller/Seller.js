import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import Header from '../header/Header'
import {getInventory, getCurrentUser} from '../services/Service';
import ProductItem from '../Product_Item/ProductItem';  
import PostProduct from '../postProduct/postProduct';

class Seller extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            products: [{
                id: 1,
                Name: 'Bananas butter',
                Price: 150,
                Category: 'Fruit Butters',
                Description: 'A fruity cholesterol sensation'
            }]
        }
    }
    componentDidMount(){
        // let response = getCurrentUser();
        // this.setState({ user: response});
        // let response = getInventory(); 
        // this.setState({ inventory: response}) 
        // console.log(this.state.inventory, 'Component did mount.');
        // this.mapProducts();
    }
    mapProducts(){
        const products = this.state.products;
        
        return products.map(product =>{
            console.log('ive ran.');
            <ProductItem product={product} key={product.id}/>
            //pass in props we will need later
        });
    }
    // filterProducts(){
    //     const products = this.state.products;

    //     return products.filter(product=>{
    //         this.state.user.username.includes(product.user.username);
    //     })
    // }
    
    render(){
        return(
            <div>
                <Header />
                <Table>
                    Hello
                    {this.mapProducts()}
                </Table>
                <PostProduct />
                
            </div>
        )
    }
}
export default Seller;