import React from 'react'
import { SafeAreaView , Keyboard,TouchableWithoutFeedback ,Alert ,TextInput } from 'react-native'
import {SubmitButton,SubmitText} from './styles'
import Picker from '../../components/Picker/index.android'
import firebase from '../../config/firebase'
import {format} from 'date-fns'
export default ()=>{
  const [valor,setValor] = React.useState('')
  const [tipo,setTipo] = React.useState(false)

  function handleSubmit(){
    Keyboard.dismiss()
    if(!tipo || typeof valor === 'string'){
      return alert('Dados errados')
    }
    Alert.alert('Salvar dados?',
    'confirmar?',
    [{
      text:'Cancel',
      style:'cancel'
    },
    {
      text:'Continue',
      onPress:()=>handleAdd()
    }
  ])
  }
  async function handleAdd(){
    let uid = await firebase.auth().currentUser.uid;
    let key = await firebase.database().ref('historico').child(uid).push().key
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo,
      valor: parseFloat(valor),
      date: format(new Date(),'dd/MM/yy')
    })
    let user = await firebase.database().ref('users').child(uid)
    await user.once('value').then(snp=>{
      let saldo = parseFloat(snp.val().saldo)
      tipo ==='despesa'?saldo -=parseFloat(valor): saldo+=parseFloat(valor)
      user.child('saldo').set(saldo)

    })
    setValor('')
    Keyboard.dismiss()
  }
  return(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <SafeAreaView style={{alignItems:'center'}}>
        <TextInput 
        placeholder='valor desejado'
        value={valor}
        onChangeText={txt=>setValor(txt)}
        />
        <Picker setValue={setTipo}/>
        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}