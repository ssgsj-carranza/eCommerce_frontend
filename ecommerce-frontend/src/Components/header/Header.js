import React, {Component} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import {getProduct} from '../services/Service';
import axios from 'axios';
import ProductItem from '../Product_Item/ProductItem'
import ProductContainer from "../productContainer/productContainer";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:'',
      user: true,
      products:[],
      filteredProduct: [],
      mappedProduct:[]
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this);
  } 
    componentDidMount(){
      this.getProduct();
    }
      async getProduct(){
        const response = await axios.get('https://localhost:44394/api/products/');
        this.setState({
          products: response.data
        })
        let mapped = this.mapProduct(this.state.products)
        this.setState({mappedProduct: mapped})
        console.log(response.data)
      }

    mapProduct(entry){
      return entry.map(product =>{
        return <ProductItem key={product.id} product={product}/>
      });
    }
    handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
      console.log(this.state.searchTerm);
    }

    handleSubmit = (event) => {
      console.log(this.props, "handlesubmit")
      this.setState({searchTerm: event.target.value});
      const filteredProducts = this.state.products.filter(product => {
        return product.name.toLowerCase().includes(this.state.searchTerm) ||
               product.categoryId.toLowerCase().includes(this.state.searchTerm)
      });
      console.log(filteredProducts, "test");
      this.setState({filteredProduct:filteredProducts})
    }
  
    render(){
    return (
      <div className="header">
      
          <img
            className="header__logo"
            src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
      
      
        <div className="header__search">
         {/* <input className="header__searchInput" type="text" /> */}
          <SearchBar handleChange={this.handleChange} products={this.state.products}/>
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
        
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              {/* <span className="header__optionLineTwo">Sign In</span> */}
              
                <React.Fragment>
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                </React.Fragment>
            </div>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
              <ProductContainer mapProduct={this.state.mappedProduct} />
        </div>
      </div>
    );
  }
}

export default Header;

// function Header() {  
//   return (
//     <div className="header">
      
//         <img
//           className="header__logo"
//           src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//         />
      
      
//       <div className="header__search">
//         {/* <input className="header__searchInput" type="text" /> */}
//         <SearchBar />
//         <SearchIcon className="header__searchIcon" />
//       </div>

//       <div className="header__nav">
        
//           <div className="header__option">
//             <span className="header__optionLineOne">Hello Guest</span>
//             <span className="header__optionLineTwo" >Sign In</span>
//           </div>
//             <div className="header__optionBasket">
//             <ShoppingBasketIcon />
//             <span className="header__optionLineTwo header__basketCount">
//               0
//             </span>
//           </div>
        
//       </div>
//     </div>
//   );
// }

// export default Header;