import {useState} from 'react';

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  
} from './styles';
import SafeArea from '../../Utils/SafeArea';
import Button from '../../Components/Button';
import Dropdown from '../../Components/Dropdown';



const WhereYouLive= ({navigation}) => {
    const [email,onChangeEmail]=useState('')
    const [password,onChangePassword]=useState('')
    
    const dataState = [
      {
        id: '1',
        value:'rj',
        label: 'RJ',
      },
      {
        id: '2',
        value:'sp',
        label: 'SP',
      }
    ];

    const dataCity = [
        {
          id: '1',
          value:'rio',
          label: 'Rio de Janeiro',
        },
        {
          id: '2',
          value:'saoPaulo',
          label: 'São Paulo',
        }
      ];

      const dataNeighborhood = [
        {
          id: '1',
          value:'botafogo',
          label: 'Botafogo',
        },
        {
          id: '2',
          value:'morumbi',
          label: 'Morumbi',
        },
        {
            id: '3',
            value:'copa',
            label: 'Copacabana',
        },
        {
            id: '4',
            value:'fla',
            label: 'Flamengo',
        },
        
      ];
    
    return (
      <SafeArea>
        <Container>
            <TitleContainer>
              <Text title={true}>Onde você mora</Text>
              <Text >Queremos entender onde você trabalha para poder oferecer 
                  opções especiais dos{'\n'} entregadores da sua região.
              </Text>
            </TitleContainer>
            <Dropdown label="Estado"  data={dataState}  marginTop={30}/>
            <Dropdown label="Cidade"  data={dataCity}  marginTop={30}/>
            <Dropdown label="Bairro"  data={dataNeighborhood}  marginTop={30}/>
            <ButtonContainer>
              <Button
                width={'90%'}
                text='Próximo'
                marginTop={350}
                marginLeft={0}
                background={'white'}
                size={18}
                onPress={() => navigation.navigate('Veiculos')}
              />
            </ButtonContainer>
        </Container>         
      </SafeArea>
    );
  }

    export default WhereYouLive;