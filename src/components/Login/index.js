import React from 'react'

//native-base
import { SafeAreaView , TextInput ,Text ,TouchableOpacity  } from 'react-native'
 
//styles
import styles from '../../styles/styles'

//firebase
import firebase from '../../config/firebase'

export default ({changeStatus})=>{
  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')

  const [type,setType]=React.useState('login')


  async function handleAction(){
    if(type =='login'){
      const user = firebase.auth().signInWithEmailAndPassword(email,password).then(user=>changeStatus(user.user.uid))
      .catch(err=>alert('algo deu errado'))
      return 
    }
    if(type == 'cadastrar'){
      const user = firebase.auth().createUserWithEmailAndPassword(email,password).then(user=>changeStatus(user.user.uid))
      .catch(err=>alert('algo deu errado'))
      return 
    }
    return alert('Algo deu errado tente novamente mais tarde')
  }


  return (
    <SafeAreaView >
     <Text>Email</Text>
      <TextInput 
      style={styles.input}
      placeholder='Insira seu email'
      value={email}
      onChangeText={e=>setEmail(e)}
      />
      <Text>Senha</Text>
      <TextInput 
      style={styles.input}
      placeholder='Insira seu email'
      value={password}
      onChangeText={e=>setPassword(e)}
      />
      <TouchableOpacity onPress={handleAction}>
        <Text style={[styles.buttonsTouch, { backgroundColor: type ==='login' ? '#3ea6f2':'#141414' }]}>
          {type ==='login' ? 'Acessar':'Cadastrar'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setType(prev=>prev==='login'?'cadastrar':'login')}>
        <Text style={{textAlign:'center',paddingTop:20}}>
        {type ==='login' ? 'Criar uma conta':'Já possuo uma conta.'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}