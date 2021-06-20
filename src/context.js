import React, { useContext } from 'react'

const MyContext = React.createContext()
export const MyProvider = MyContext.Provider
export function useMyContext() {
  const context = useContext(MyContext);
  return context;
}