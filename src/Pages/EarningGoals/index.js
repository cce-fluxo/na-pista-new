import React, { useState, useEffect} from 'react' 
import { 
    Container, 
    TitleContainer,
    Text,
    ButtonContainer,
    Title
} from './styles'

import colors from '../../Constants/constants'
import Button from '../../Components/Button'
import IncrementContainer from '../../Components/IncrementContainer'

export default function EarningGoals({navigation}) {

  return (
      <Container>
          <TitleContainer>
              <Text title={true}>Metas de ganhos</Text>
              <Text>Definindo suas metas de ganhos te ajudaremos a acompanhar se está alcançando elas.</Text>
          </TitleContainer>  
          <IncrementContainer title="Diária" marginLeft={0} marginTop={20}/>
          <IncrementContainer title="Semanal" marginLeft={0} marginTop={30}/>
          <IncrementContainer title="Mensal" marginLeft={0} marginTop={30}/>
          <ButtonContainer>
              <Button 
                width={'90%'}
                text='Próximo'
                marginTop={20}
                marginLeft={0}
                background={'white'}
                size={18}
                disabled={false}
                onPress={() => navigation.navigate('Sucesso')}/>
                <Button 
                width={'80%'}
                text='Definir depois'
                marginTop={10}
                marginLeft={0}
                background={'#FFBF00'}
                size={16}
                onPress={() => navigation.navigate('First')}
                color={'rgba(0, 0, 0, 0.6)'}/>
          </ButtonContainer>
      </Container>
    )
}
