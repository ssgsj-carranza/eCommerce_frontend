import React, {Component} from 'react';
import {getInventory} from '../services/Service';

class Seller extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            inventory:''
        }
    }
    componentDidMount(){
        let response = getInventory(); 
        this.setState({ inventory: response}) 
        console.log(this.state.inventory, 'Component did mount.');
    }
    mapProducts(){
        const products = this.state.inventory.Product;
        return products.map(product =>{
            <Product />
            //pass in pros we will need later
        });
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default Seller;