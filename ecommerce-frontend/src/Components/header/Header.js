import React, {Component} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import SearchBar from '../search/SearchBar';

class Header extends Component {
    state = {
      searchTerm:'',
      user: true,
    }
    
    handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
      console.log(this.state.searchTerm);
    }

    handleSubmit = (event) => {
      
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
          <SearchBar />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
        
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              {/* <span className="header__optionLineTwo">Sign In</span> */}
              
                <React.Fragment className='header__optionLineTwo'>
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