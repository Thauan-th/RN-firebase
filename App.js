import React  from 'react';

import { NavigationContainer } from '@react-navigation/native';

//expo
import { StatusBar } from 'expo-status-bar';

//native-base
import { Text, View ,  SafeAreaView , TextInput , Button, ActivityIndicator} from 'react-native';

//styles
import styles from './src/styles/styles'

//firebase
import firebase from './src/config/firebase'
import { FlatList } from 'react-native';

import AuthProvider from './src/config/context'

//routes
import Routes from './src/routes';

export default function App() {
 


  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={styles.container}>
          <Routes/>
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
}



