import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#7D5B8c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor:'#fff',
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor:'#121212',
    paddingBottom:10,
    paddingEnd:100
  },
  content:{
    display:'inline',
    justifyContent:'center'
  },
  buttonsTouch:{
    backgroundColor:'#000',
    color:'#fff',
    textAlign:'center',
    height:45,
    marginTop:20,
    borderRadius:5,
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
  },
  containerTask:{
    flexDirection:"row"
  },
  buttonAddTask:{
    backgroundColor:'#141414',
    height:39,
    alignItems:"center",
    justifyContent:"center",
    padding:10
  }

});

export default styles;