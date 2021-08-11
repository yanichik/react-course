import { createContext } from "react";

const myContext = [
  {
    name: 'Jake',
    age: 14
  },
  {
    name: 'Sonny',
    age: 23
  }
]

export const UserContext = createContext();

export const UserProvider = ({children}) => {
return (
  <UserContext.Provider value={myContext}>{children}</UserContext.Provider>
  // <UserContext.Provider value="my value">{children}</UserContext.Provider>
)
}

