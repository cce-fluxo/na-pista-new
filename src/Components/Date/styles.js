import styled from 'styled-components/native';
import {colors,screenHeight, screenWidth,fonts} from '../../Constants/constants';

export const Container = styled.View`
  width: ${screenWidth * 0.817}px;
  max-height: 72px;
  flex:1;
  align-self: center;
  align-items: flex-start;
  margin-top: ${props => props.marginTop}px;
  margin-left: ${props => props.marginLeft}px;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:${colors.inputTitle};
  font-family: ${ fonts.Ubuntu};
  margin-bottom: 5px;
`;

export const ModalContainer=styled.View`
  padding-bottom: 20px;
  background-color: white;
`


export const InputContainer = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 3.5px;
  width: 100%;
  flex-direction: row;
  padding: 20px;
    
`

export const InputText = styled.Text`
    
    
    align-self: center;
    color: black;
    
`;
