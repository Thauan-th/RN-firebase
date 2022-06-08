import React  from 'react';

//native-base
import {FlatList ,TouchableOpacity , Text, View ,  SafeAreaView , TextInput , Button, ActivityIndicator } from 'react-native';

//styles
import styles from './src/styles/styles'

//firebase
import firebase from './src/config/firebase'

//components
import Login from './src/components/Login'
import TaskItem from './src/components/Tasks';

export default function App() {


  const fakeTaxi = [{
    id:'1',
    conteudo:'Estudar JS'
  },{
    id:'2',
    conteudo:'Provas faculdade'
  }
]

  const [user,setUser] = React.useState(false)

  const [newTask ,setNewTask] = React.useState('')
  const [task,setTask] = React.useState(fakeTaxi)

  async function addTask(){
    if(newTask.length ===0) return alert('Preencha o campo conforme o combinado ')

    let tasks = fb.child(user)
    let keyUnique =  tasks.push().key
    tasks.child(keyUnique).set({
      conteudo:newTask
    }).then(_=>{
      const data ={
        id : keyUnique,
        conteudo: newTask
      }
      setTask(prev=>[...prev,data])
    })
    setNewTask('')

  }


  async function getTasks(){
    console.log('get')
  }


  async function deleteItem(key){
    console.log(key)
  }
  
  async function editItem(item){
    console.log(item)
  }

  const fb =  firebase.database().ref('Tarefas')
  if(!user){
    return <SafeAreaView style={styles.container} > <Login changeStatus={setUser}/> </SafeAreaView>
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
          onChangeText={txt=>setNewTask(txt)}
          value={newTask}
          placeholder='Que tarefa voce vai fazer ?'
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonAddTask} onPress={addTask}>
          <Text style={{color:'white',fontSize:15}}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={task} keyExtractor={item=>item.id} renderItem={({item})=><TaskItem editItem={editItem} deleteItem={deleteItem} item={item}/>}/>
    </SafeAreaView>
  );
}



