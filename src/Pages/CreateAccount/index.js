import {useState} from 'react';
import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  BottomText,
  UnderlineText
} from './styles';
import SafeArea from '../../Utils/SafeArea';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

export default function CreateAccount({navigation}) {
  const [email,onChangeEmail]=useState('')
  const [password,onChangePassword]=useState('')
  const [confirmPassword,onChangeConfirmPassword]=useState('')
  
  return (
    <SafeArea>
      <Container>
          <TitleContainer>
            <Text>Criar conta</Text>
          </TitleContainer>
          <Input 
          title={'Login'}
          marginLeft={0}
          marginTop={0}
          keyboardType='email-address'
          value={email}
          onChangeText={onChangeEmail}
          autoComplete='email'
          placeholder=''
          />
          <Input 
          title={'Senha'}
          marginLeft={0}
          marginTop={30}
          secureTextEntry
          value={password}
          onChangeText={onChangePassword}
          placeholder=''
          />
          <Input 
          title={'Repita a senha'}
          marginLeft={0}
          marginTop={30}
          secureTextEntry
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          placeholder=''
          />
          <ButtonContainer>
            <Button
              width={'90%'}
              text='Próximo'
              marginTop={350}
              marginLeft={0}
              background={'white'}
              size={18}
              onPress={() => navigation.navigate('Informacoes basicas')}
            />
            <BottomText>Ao realizar seu cadastro você concorda com nossos {''}
                <UnderlineText>Termos de Uso</UnderlineText> {''}e{' '}  
                <UnderlineText>Termos de Privacidade.</UnderlineText>
            </BottomText>
          </ButtonContainer>
      </Container>   
    </SafeArea>
  );
}