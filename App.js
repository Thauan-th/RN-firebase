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
  
    const [user,setUser] = React.useState(false)
    const [newTask ,setNewTask] = React.useState('')
    const [task,setTask] = React.useState([])

    const inputRef = React.useRef(null)
    const fb =  firebase.database().ref('Tarefas')
    const [key,setKey] = React.useState('')
    
  React.useEffect(()=>{
      getTasks()
  },[user])

  async function addTask(){
    if(newTask.length ===0) return alert('Preencha o campo conforme o combinado ')
    if(key!==''){
      firebase.database().ref('Tarefas').child(user).child(key).update({
        conteudo: newTask
      }).then(_=>{
        const findIdx = task.findIndex(item=>item.id ===key )
        const clone = task
        clone[findIdx].conteudo =  newTask
        setTask([...clone])
        alert('atualizado')
      })
      return
    }
    
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
    if(user){
      firebase.database().ref('Tarefas').child(user).once('value',snapshot=>{
        snapshot?.forEach((child)=>{
          let data = {
            id:child.key,
            conteudo:child.val().conteudo
          }
          setTask(prev=>[...prev,data])
        })

      })
      return 
    }
    return 
  }


  async function deleteItem(key){
    firebase.database().ref(user).child(key).remove().then(snp=>{
      const filtered = task.filter(item=>item.id !==key)
      setTask(filtered)
    })
  }
  
  async function editItem(item){
    setKey(item.id)
    setNewTask(item.conteudo)
    inputRef.current.focus()
  }
  function cancelEdit(){
    setKey('')
    setNewTask('')
  }

  if(!user){
    return <SafeAreaView style={styles.container} > <Login changeStatus={setUser}/> </SafeAreaView>
  }
  return (
    <SafeAreaView style={styles.container}>
      {key.length > 0  && <TouchableOpacity onPress={cancelEdit}>
        <Text style={{color:'#4ebd24'}}>Voce esta alterando uma task.Clique aqui para cancelar </Text>
      </TouchableOpacity>}
      <View style={styles.containerTask}>
        <TextInput
          onChangeText={txt=>setNewTask(txt)}
          value={newTask}
          placeholder='Que tarefa voce vai fazer ?'
          style={styles.input}
          ref={inputRef}
        />
        <TouchableOpacity style={styles.buttonAddTask} onPress={addTask}>
          <Text style={{color:'white',fontSize:15}}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={task} keyExtractor={item=>item.id} renderItem={({item})=><TaskItem editItem={editItem} deleteItem={deleteItem} item={item}/>}/>
    </SafeAreaView>
  );
}



