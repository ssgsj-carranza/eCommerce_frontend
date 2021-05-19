import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
// import Seller from './Components/Seller/Seller';
import LoginScreen from './Components/login_screen/LoginScreen';
import RegisterScreen from './Components/register_screen/RegisterScreen';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
  state = {
    product: [],
    user: '',
  }
  render(){
    return(
      <div className="App">
        <Switch>
          {/* <Route path='/' exact component ={LandingPage} /> */}
          <Route path='/login' component={LoginScreen} />
          {/* <Route path='/logout' component={Logout} /> */}
          <Route path='/register' component={RegisterScreen} />
          {/* <Route path='/not_found' component={NotFoundScreen} /> */}
        </Switch>  
      </div>
    )
  }
}

export default App;
