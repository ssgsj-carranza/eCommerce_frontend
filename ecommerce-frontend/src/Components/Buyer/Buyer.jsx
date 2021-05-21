import React, {Component} from 'react';
import Footer from '../Footer/footer';
import Header from '../header/Header';
import ShoppingCartContainer from '../shoppingCartContainer/shoppingCartContainer';
import ShoppingCartItem from '../shoppingCartItem/shoppingcartItem';

class Buyer extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoppingCart: [{
                id: 1,
                User:{
                    Username: 'Johanness'
                },
                Product:{
                    id: 1,
                    Name: 'Bananas butter',
                    Price: 150,
                    Category: 'Fruit Butters',
                    Description: 'A fruity cholesterol sensation',
                },
                Quantity: 3
            }],
            renderedShoppingCarts: null
        }
    }

    componentDidMount() {
        //services get shopping cart items axios.get(Shoppingcarts)
        const mappedShoppingCarts = this.mapShoppingCarts();
        this.setState({renderedShoppingCarts: mappedShoppingCarts})
    }

    filterShoppingCarts() {
        let temp = this.state.shoppingCart.filter(shoppingCart =>{
            return shoppingCart.UserId === this.props.user.id
        })
        return temp;
    }

    mapShoppingCarts() {
        const shoppingCarts = this.filterShoppingCarts();
        
        return shoppingCarts.map(shoppingCart =>{
            <ShoppingCartItem shoppingCart={shoppingCart} key={shoppingCart.id}/>
        });
    }
    



    render(){
        return(
            <div>
                <Header />
                <ShoppingCartContainer shoppingCarts={this.state.renderedShoppingCarts}/>
                <Footer />
            </div>
        )
    }
}

export default Buyer;