import styled from 'styled-components/native';



export const Container = styled.View`
flex:1;
background-color: #131313;
align-items: center;
`;

export const Nome = styled.Text`
text-align: center;
font-size: 28px;
margin-top: 25px;
margin-bottom: 25px;
color: #FFF;
`;

export const NewText = styled.Text`
font-size: 18px;
color: #FFF;
font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: ${({color})=>color};
width: 90%;
height: 45px; 
border-radius: 10px;
margin-top: 10px;
`;

export const LogoutText = styled.Text`
font-size: 18px;
color: #FFF;
font-weight: bold;
`;
