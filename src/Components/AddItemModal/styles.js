import styled from 'styled-components/native';

import {colors,screenHeight, screenWidth,fonts} from '../../Constants/constants';

export const Container = styled.View`
  width: ${screenWidth * 0.817}px;
  max-height: 72px;
  flex:1;
  align-self: center;
  align-items: flex-start;
  margin-top: 10px;
`;



export const ModalContainer=styled.View`
  padding-bottom: 20px;
  background-color: ${colors.background};
  height:${screenHeight * 0.3}px;
  border-radius: 5px;
`


export const AddContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  width: ${screenWidth * 0.817}px;
  flex-direction: row;
`
export const AddText=styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: 14px;
  color: black;
  margin-left: 10px;
`;