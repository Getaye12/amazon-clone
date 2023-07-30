import React, { createContext, useReducer, useContext } from "react";

// Need Context API
// 1. To track basket
// 2. To Track user

// This is Data layer
// The createContext function is used to create a new context object in React. Context provides a way to pass data through the component tree without having to pass props down manually at every level 
export const StateContext = createContext()

// create Provider
export const StateProvider = ({ reducer, initialState, children }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use inside component, the possible way of pulling and pushing is due case of usestatevalue function
// The useStateValue function is used to access the state from the data layer in your React components. It uses the useContext hook to access the context object created using the createContext function.
export const useStateValue = () => useContext(StateContext)