import React, { createContext,  useReducer, useContext } from 'react'

//1. we call createContext for crating a context --(which is like a store itself)
export const StateContext = createContext()

// 2. create a function in which provider wrap the children and 
//  in provider value we call the useReducer which take two argu
//  reducer & initialstate which we created in reducer file

export const StateProvider = ({reducer, initialState, children}) =>{
    
  <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
  </StateContext.Provider>

}

//3. make a function which return useContext which has StateContext
export const useStateValue = () => useContext(StateContext)
