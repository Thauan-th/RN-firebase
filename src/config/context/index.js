import React from 'react'

export const AuthContext = React.createContext({})

export default ({children})=>{
  const [user,setUser]=React.useState({
    nome:'Thauan'
  })
  return (
  <AuthContext.Provider value={{user}}>
    {children}
  </AuthContext.Provider>
  )
}