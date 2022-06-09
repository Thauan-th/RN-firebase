import React from 'react'
import {View , Text} from 'react-native'
import { Button, SafeAreaView } from 'react-native'
import {AuthContext} from '../../config/context'

export default ()=>{
  const {user,signOut} = React.useContext(AuthContext)
  return(
    <SafeAreaView>  
      <Text>{user.nome}</Text>
      <Button onPress={signOut} title='logOut' />
    </SafeAreaView>
  )
}