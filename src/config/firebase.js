import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyBCVdABBipA3Yx49z261IRfnIRf285S_vo",

  authDomain: "react-native-a3419.firebaseapp.com",

  databaseURL: "https://react-native-a3419-default-rtdb.firebaseio.com",

  projectId: "react-native-a3419",

  storageBucket: "react-native-a3419.appspot.com",

  messagingSenderId: "642540063949",

  appId: "1:642540063949:web:7e2a34ca9e18dbfd762d84"

};

const app = firebase.initializeApp(firebaseConfig);

export default app
