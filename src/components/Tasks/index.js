import React from 'react'

//native-base
import { StyleSheet, Text , View , TouchableOpacity , TouchableWithoutFeedback } from 'react-native'

//icons
import Feather from 'react-native-vector-icons/Feather'

export default ({item,deleteItem,editItem})=>{
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>deleteItem(item.id)}> 
          <Feather name="trash" color="white" size={20} />
        </TouchableOpacity>
        <View>
          <TouchableWithoutFeedback onPress={()=>editItem(item)}>
            <Text style={{paddingLeft:10,color:'white'}}>{item.conteudo}</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
  )
}
const styles= StyleSheet.create({
  container :{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#121212',
    padding:10,
    marginBottom:10,
    borderRadius:4,
    width:'335px'
  }
})