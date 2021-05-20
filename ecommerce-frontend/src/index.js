import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer, {initialState} from './Components/reducer/Reducer';
import StateProvider from './Components/contextAPI/StateProvider';

//enclosed App in StateProvider so children get access to state too. By passing initialState and reducer, the state know what is inital and reducer
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
