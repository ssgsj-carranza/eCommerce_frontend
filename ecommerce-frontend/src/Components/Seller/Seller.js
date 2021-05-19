import React, {Component} from 'react';
import {getInventory} from '../services/Service';

class Seller extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            inventory:null
        }
    }
    componentDidMount(){
        let response = getInventory();
        console.log(response);
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default Seller;