import React from 'react'

//deps
import { createStackNavigator } from '@react-navigation/stack'

//pages
import SigIn from '../pages/SigIn'
import SigUp from '../pages/SigUp'

const AuthStack = createStackNavigator()

export default ()=>{
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name='SigIn' component={SigIn} options={{headerShown:false}} />
      <AuthStack.Screen 
        name="SigUp" 
        component={SigUp}
        options={{
            headerStyle:{
                backgroundColor: '#131313',
                borderBottomWidth: 1,
                borderBottomColor: '#00b94a'
            },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitle: 'Voltar'
        }}
        />
    </AuthStack.Navigator>
  )
}