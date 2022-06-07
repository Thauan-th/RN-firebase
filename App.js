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
  const [nome,setNome] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [usuarios,setUsuarios]= React.useState([])
  const [load,setLoad] = React.useState(true)

  const fb =  firebase.database().ref('usuarios')
  React.useEffect(()=>{
    getUsers()
  },[])
  React.useEffect(()=>{
    if(usuarios.length>0) setLoad(false)
  },[usuarios])
  
  async function getUsers(){
      let aux = []
        await fb.once('value',snp => {
          snp.forEach(item=>{
            let data = {
              key : item.key,
              nome: item.val().nome,
              email: item.val().email
            }
            aux.push(data)
          })
          setUsuarios(aux)
        })
    }
    
    async function cadastrar(){
      if(nome.length ===0 &&  email.length ===0 ){
        return alert('Preencha corretamente os campos')
      }

    const key = fb.push().key
    fb.child(key).set({
      nome,
      email
    })
    alert('Cadastrado')
    setEmail('')
    setNome('')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={e=>setNome(e)} style={styles.input} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={e=>setEmail(e)} style={styles.input} />
      <Button title='Cadastrar' onPress={cadastrar}/>
      {load ? <ActivityIndicator/> :
      <FlatList
      keyExtractor={item=>item.key}
      data={usuarios}
      renderItem={({item})=>{
        return (
              <>
          -
          <Text>{item.nome}</Text>
          <Text>{item.email}</Text>
          </> 
         )
        }}
        />
      }
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}



