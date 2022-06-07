import React  from 'react';

//expo
import { StatusBar } from 'expo-status-bar';

//native-base
import { Text, View ,  SafeAreaView , TextInput , Button, ActivityIndicator} from 'react-native';

//styles
import styles from './src/styles/styles'

//firebase
import firebase from './src/config/firebase'
import { FlatList } from 'react-native';

export default function App() {
  const [senha,setSenha] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [nome,setNome] = React.useState('')

  const fb =  firebase.database().ref('usuarios')

  async function Logar(){
      if(senha.length ===0 &&  email.length ===0 ){
        return alert('Preencha corretamente os campos')
      }
      await firebase.auth().createUserWithEmailAndPassword(email,senha).then(value=>{
        fb.child(value.user.uid).set({
          nome,
          email,
          senha
        })
      }).catch(err=>{
        if(err)console.log(err) 
      })
  }
  async function logOut(){
    alert('deslocado')
    setUser('')
    setSenha('')
    setEmail('')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={e=>setNome(e)} style={styles.input} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={e=>setEmail(e)} style={styles.input} />
      <Text>Senha</Text>
      <TextInput value={senha} onChangeText={e=>setSenha(e)} style={styles.input} />
      <Button title='Logar' onPress={Logar}/>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}



