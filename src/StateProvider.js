import React, { createContext, useContext, useReducer } from 'react'

// preparing the data layer
export const StateContext = createContext()

// children = what is wrapped within the component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )

export const useStateValue = () => useContext(StateContext);

