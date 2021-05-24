import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import LoginScreen from './Components/login_screen/LoginScreen';
import { RegisterScreen } from './Components/register_screen/RegisterScreen';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/landing_page/Home.jsx';
import './app.css';
import Logout from './Components/logout/Logout'

const App = () => {
    return(
      <div className="App bg">
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
