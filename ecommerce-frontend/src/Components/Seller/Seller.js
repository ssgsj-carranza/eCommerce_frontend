import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import Header from '../header/Header'
import {getInventory} from '../services/Service';

class Seller extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            inventory: {
                id: 1,
                quantity: 123,
                user: {
                    username: 'johnny',
                },
                Product: {
                    id: 1,
                    Name: 'Bananas butter',
                    Price: 150,
                    Category: 'Fruit Butters',
                    Description: 'A fruity cholesterol sensation'
                }
            }
        }
    }
    componentDidMount(){
        // let response = getInventory(); 
        // this.setState({ inventory: response}) 
        // console.log(this.state.inventory, 'Component did mount.');
        // this.mapProducts();
    }
    mapProducts(){
        const products = this.state.inventory;
        return products.map(inventory =>{
            <ProductItem product={inventory.Product} key={inventory.Product.id}/>
            //pass in pros we will need later
        });
    }
    
    render(){
        return(
            <div>
                <Header />
                <Table>
                    <tr>{this.mapProducts}</tr>
                </Table>
                
            </div>
        )
    }
}
export default Seller;