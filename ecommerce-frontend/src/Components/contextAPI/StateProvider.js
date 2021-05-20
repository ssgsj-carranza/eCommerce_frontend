import React, { createContext, useContext, useReducer } from "react";
//The React Context API provides a way to pass data to components without having to pass props manually at every single level.
//ASK TEAM ABOUT USING THIS

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export default StateProvider

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
