import React, {useState} from 'react';

//native-base
import { Platform } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

//context
import { AuthContext } from '../../config/context';

//styles
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles';

export default ( )=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation()

  const {user,signIn,redirect} = React.useContext(AuthContext)

  function Login(){
    signIn(email,password)
  }

 return (
   <Background>
      <Container
        behavior={Platform.OS ==='ios' && 'padding'}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')}/>
        
        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>

      <SubmitButton onPress={Login}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={()=>redirect('SigUp')}>
        <LinkText>Criar uma conta!</LinkText>
      </Link>

      </Container>
   </Background>
  );
}