import styled from 'styled-components/native';
import { fonts, colors, screenHeight, screenWidth } from '../../Constants/constants';

export const MainContainer = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.View`
  background-color: #F8F8F8;
  flex: 1;
  width: ${screenWidth}px;
`;

export const View = styled.View`
  background-color: white;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius}px;
  elevation: ${props => props.elevation};
  align-self: center;
  margin-top: ${props => props.marginTop}px;
  margin-left: ${props => props.marginLeft}px;
  margin-bottom: 10px;
`;

export const Subcontainer = styled.View`
  background-color: ${colors.background};
  width: ${screenWidth * 1}px;
  height: ${screenHeight * 0.32}px;
`;

export const ScrollView = styled.ScrollView`
  position: absolute;
  top: 86px;
  align-self: center;
  flex: 1;
`;

export const EarningContainer = styled.View`
  background-color: white;
  width: ${screenWidth * 0.86}px;
  height: ${screenHeight * 0.32}px;
  border-radius: 8px;
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;
  margin-bottom: 5px;
  elevation: 4;
`;


export const TextContainer = styled.View`
  flex: 1;
  padding: 10px;
  margin-top: 10px;
  max-height: ${screenHeight*0.1}px;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
`;


export const Text = styled.Text`
  font-family: ${  fonts.Ubuntu};
  font-size:  ${props => props.fontSize}px;
  line-height:   ${props => props.lineHeight}px;
  margin-left:  ${props => props.marginLeft}px;
  color: ${props => props.color};
  font-weight: normal;
`;


export const IconContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: ${screenHeight*0.03}px;
  max-width: ${screenWidth*0.07}px;
  margin-right: ${props => props.marginRight}px;
`;


export const ProgressBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: ${screenWidth*0.88}px;
  align-self: center;
`;

export const ActivityButton = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  background-color: ${colors.background};
  border-radius: 50px;
  margin-left: 20px;
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  elevation: 4;
`;

export const TimeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${screenWidth * 0.9}px;
  background-color:bl;
`;