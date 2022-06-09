import React from 'react'

//context
import { AuthContext } from '../config/context'

//routes
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { ActivityIndicator,View } from 'react-native'

export default ()=>{
  const {signed,load} =  React.useContext(AuthContext)
  // console.log(load)
  // if(load) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size={'large'}/></View>
  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}