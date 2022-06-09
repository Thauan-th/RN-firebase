import React from 'react'
import {View , Text} from 'react-native'
import { Button, SafeAreaView } from 'react-native'
import {AuthContext} from '../../config/context'
import HistoricoList from '../../components/HistoricoList'
import { Background, Container, Nome, Saldo, Title, List} from './styles';

export default function Home() {
  const [historico, setHistorico] = React.useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 200},
    {key: '3', tipo: 'receita', valor: 40},
    {key: '4', tipo: 'receita', valor: 89.62},
    {key: '5', tipo: 'despesa', valor: 500},
    {key: '7', tipo: 'despesa', valor: 200},
    {key: '8', tipo: 'receita', valor: 40},
    {key: '33', tipo: 'receita', valor: 89.62},
    {key: '22', tipo: 'despesa', valor: 500},
    {key: '16', tipo: 'despesa', valor: 310},
  ]);

  const { user } = React.useContext(AuthContext);
  // console.log(user)
 return (
    <Background>
      <Container>
        <Nome>{user?.nome}</Nome>
        <Saldo>{user.set}</Saldo>
      </Container>

      <Title>Ultimas movimentacoes</Title>

      <List
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key}
      renderItem={ ({ item }) => ( <HistoricoList data={item} /> )}
      />

    </Background>
  );
}