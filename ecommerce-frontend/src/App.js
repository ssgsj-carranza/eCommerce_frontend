import React, {Component} from 'react';
import Seller from './Components/Seller/Seller';
import LoginScreen from './Components/login_screen/LoginScreen';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/landing_page/Home';
import Header from './Components/header/Header';

class App extends Component{
  state = {
    product: [],
    user: '',
  }
  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/login' component={LoginScreen} />
          {/* <Route path='/logout' component={Logout} /> */}
          {/* <Route path='/register' component={RegisterScreen} /> */}
          {/* <Route path='/not_found' component={NotFoundScreen} /> */}
        </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}

export default App;
