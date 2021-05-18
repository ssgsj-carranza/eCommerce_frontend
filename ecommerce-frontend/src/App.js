import React, {Component} from 'react';
import Seller from './Components/Seller/Seller';

class App extends Component{
  state = {
    product: [],
    user: '',
  }
  render(){
    return(
      <Seller/>
    )
  }
}

export default App;
