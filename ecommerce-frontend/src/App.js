import React, {Component} from 'react';
import Seller from './Components/Seller/Seller';
import LoginScreen from './Components/login_screen/LoginScreen';

class App extends Component{
  state = {
    product: [],
    user: '',
  }
  render(){
    return(
      <div>
      <Seller/>
      <LoginScreen/>
      </div>
    )
  }
}

export default App;
