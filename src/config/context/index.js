import React from 'react'

import firebase from '../../config/firebase'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({})

export default ({children})=>{
  const [user,setUser] = React.useState(null)
  const [load,setLoad] = React.useState(true)
  const Navigate = useNavigation()

  React.useEffect(()=>{
    loadUser()
  })
  async function loadUser(){
    const userLoaded =await  AsyncStorage.getItem('USER') || false
    if(userLoaded.length>0){
      const userObj = JSON.parse(userLoaded)
      setUser(userObj)
      // setLoad(false)
    }
    // setLoad(false)
  }


  async function signUp(email,password,nome){
    firebase.auth().createUserWithEmailAndPassword(email,password).then(async (_)=>{
      let uid = _.user.uid
      await firebase.database().ref('users').child(uid).set({
        set:0,
        nome
      }).then(()=>{
        let data ={
          uid,
          nome,
          email: _.user.email
        }
        setUser(data)
        storeUser(data)
      })
      
    })
  }
  async function signIn(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password).then( u=>{
      let id =u.user.uid
      firebase.database().ref('users').child(id).once('value').then(snp=>{
        console.log(snp.val())
        let data ={
          uid:id,
          nome:snp.val().nome || 'SEM DADO',
          email:u.user.email
        }
        setUser(data)
        storeUser(data)
      })
    })
  }
  async function storeUser(data){
    await AsyncStorage.setItem('USER',JSON.stringify(data))
  }
  async function signOut(){
    await firebase.auth().signOut()
    await AsyncStorage.clear().then(_=>{
      setUser(false)
    })
  }
  function redirect(route){
    Navigate.navigate(route)
  }

  const context = {
    signed : !!user,
    user,
    signUp,
    signIn,
    redirect,
    load,
    signOut
  }
  return (
  <AuthContext.Provider value={context}>
    {children}
  </AuthContext.Provider>
  )
}