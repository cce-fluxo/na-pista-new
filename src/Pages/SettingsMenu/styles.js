import styled from "styled-components/native";
import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

export const Container = styled.View`
  background-color: #f8f8f8;
  flex: 1;
  width: ${screenWidth}px;
`;

export const TextContainer = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  margin-top: 1px;
  max-height: ${screenHeight * 0.1}px;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: ${(props) => props.fontSize}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
  color: ${(props) => props.color};
  font-weight: normal;
`;

export const IconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: ${screenHeight * 0.12}px;
  max-width: ${screenWidth * 0.055}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
`;

export const IconClose = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: ${screenHeight * 0.12}px;
  max-width: ${screenWidth * 0.055}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-self: center;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
`;

export const View = styled.View`
  width: ${screenWidth * 0.91}px;
  height: 1.4px;
  background-color: ${colors.line};
  margin: 5px;
  align-self: center;
`;
