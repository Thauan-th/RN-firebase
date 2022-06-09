import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Register from '../pages/Register'
import Feather from 'react-native-vector-icons/Feather'

const TabNav = createBottomTabNavigator()

export default ()=>{
  return(
    <TabNav.Navigator screenOptions={{ headerShown: false }}>
      <TabNav.Screen name='Home' component={Home} options={{
        tabBarIcon:({color,size})=>{
          return <Feather name='home' color={color} size={size}/>
        }
      }}/>
      <TabNav.Screen name='Registrar' component={Register} options={{
        tabBarIcon:({color,size})=>{
          return <Feather name='dollar-sign' color={color} size={size}/>
        },
      }}/>
      <TabNav.Screen name='Perfil' component={Perfil} options={{
        tabBarIcon:({color,size})=>{
          return <Feather name='user' color={color} size={size}/>
        }
      }}/>
    </TabNav.Navigator>
  )
}