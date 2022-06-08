import React, {useState} from 'react';

//native-base
import { Platform } from 'react-native';

//styles
import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Link, LinkText} from '../SigIn/styles'

export default ( )=> {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

 return (
   <Background>
      <Container
        behavior={Platform.OS ==='ios' && 'padding'}
        enabled
      >
        
        <AreaInput>
          <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

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

      <SubmitButton>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      </Container>
   </Background>
  );
}