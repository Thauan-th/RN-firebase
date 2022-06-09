import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const AuthStack = createStackNavigator()

export default ()=>{
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name='Home' component={Home}/>
    </AuthStack.Navigator>
  )
}