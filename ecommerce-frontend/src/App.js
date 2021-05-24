import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
// import Seller from './Components/Seller/Seller';
import LoginScreen from './Components/login_screen/LoginScreen';
import { RegisterScreen } from './Components/register_screen/RegisterScreen';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/landing_page/Home';
import Header from './Components/header/Header';
import './app.css';
import Logout from './Components/logout/Logout'
import Buyer from './Components/Buyer/Buyer';

const App = () => {
    return(
      <div className="App">
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/logout' component={Logout} />
          <Route path='/register' component={RegisterScreen} />
          {/* <Route path='/not_found' component={NotFoundScreen} /> */}
        </Switch>  
      </div>
    )
  
}

export default App;
