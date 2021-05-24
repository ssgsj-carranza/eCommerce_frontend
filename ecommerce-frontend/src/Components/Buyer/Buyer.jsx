import React, {Component} from 'react';
import Footer from '../Footer/footer';
import Header from '../header/Header';
// import { getUserShoppingCart } from '../services/Service';
import ShoppingCartContainer from '../shoppingCartContainer/shoppingCartContainer';
import ShoppingCartItem from '../shoppingCartItem/shoppingcartItem';

class Buyer extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoppingCart: [{
                id: 1,
                userId: this.props.user.id,
                user:{
                    username: 'Johanness',
                },
                product:{
                    id: 1,
                    name: 'Bananas butter',
                    price: 150,
                    category: {
                        name: 'Fruit Butters'
                    },
                    description: 'A fruity cholesterol sensation',
                },
                quantity: 3
            },{
                id: 1,
                userId: this.props.user.id,
                user:{
                    username: 'Johanness',
                },
                product:{
                    id: 1,
                    name: 'Bananas butter',
                    price: 150,
                    category: {
                        name: 'Fruit Butters'
                    },
                    description: 'A fruity cholesterol sensation',
                },
                quantity: 3
            },{
                id: 1,
                userId: this.props.user.id,
                user:{
                    username: 'Johanness',
                },
                product:{
                    id: 1,
                    name: 'Bananas butter',
                    price: 150,
                    category: {
                        name: 'Fruit Butters'
                    },
                    description: 'A fruity cholesterol sensation',
                },
                quantity: 3
            }],
            renderedShoppingCarts: null
        }
    }

    componentDidMount() {
        //services get shopping cart items axios.get(Shoppingcarts)
        const mappedShoppingCarts = this.mapShoppingCarts();
        console.log(mappedShoppingCarts, 'mapped')
        this.setState({renderedShoppingCarts: mappedShoppingCarts})
    }

    filterShoppingCarts() {
        let temp = this.state.shoppingCart.filter(shoppingCart =>{
            return shoppingCart.userId === this.props.user.id
        })
        return temp;
    }

    mapShoppingCarts() {
        const shoppingCarts = this.filterShoppingCarts();
        console.log(shoppingCarts, 'maps')
        return shoppingCarts.map(shoppingCart =>{
            return <ShoppingCartItem shoppingCart={shoppingCart} key={shoppingCart.id}/>
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

// const Buyer = () => {
//     let response = getUserShoppingCart();
//     console.log(response.data);

// return (
//     <p>hello</p>
// );
// }

export default Buyer;