import React, { useContext }  from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../config/context';

import {Container, Nome, NewText, LogoutText, Button} from './styles';

export default function Profile() {
 const navigation = useNavigation();

 const { user, signOut , redirect } = useContext(AuthContext);

 return (
   <Container>
       <Nome>
         {user && user.nome}
       </Nome>
       <Button onPress={ ()=>redirect('Registrar') } color='green' >
         <NewText>Registrar gastos</NewText>
       </Button>

       <Button onPress={signOut} color='red'>
         <LogoutText>Sair</LogoutText>
       </Button>
   </Container>
  );
}