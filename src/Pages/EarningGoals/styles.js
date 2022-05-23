import styled from 'styled-components/native';
import { fonts, colors, screenHeight, screenWidth } from '../../Constants/constants';

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
  justify-content: space-between;
  
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 10px;
  max-height: ${screenHeight*0.15}px;
  margin-left:  8px;
  margin-top: 50px;
  margin-right: 30px;
`;


export const Text = styled.Text`
  font-family: ${props=>{ return props.title?fonts.Ubuntu:fonts.UbuntuRegular;
  }};
  font-size:  ${props=>{ return props.title?'24px':'16px';
  }};
  line-height:   30px;
  
  line-height: ${props => {
    return props.title ? '30px' : '20px';
  }};
  
  padding-top: ${props => {
    return props.title ? '0px' : '15px';
  }};  
  color: ${props => {
    return props.title ? 'black' : colors.inputTitle;
  }};
 
`;

export const Title = styled.Text`
    font-family: ${  fonts.UbuntuRegular};
    font-size:  16px;
    color: ${colors.inputTitle};
    line-height:   30px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
`;


export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;  
`;