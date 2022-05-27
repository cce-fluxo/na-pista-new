import styled from "styled-components/native";

import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const Container = styled.View`
  width: ${screenWidth * 0.817}px;
  max-height: 72px;
  flex: 1;
  margin-top: 10px;
  position: absolute;
  bottom: ${screenWidth * 0.1}px;
  left: ${screenWidth * 0.48}px;
`;

export const AddContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  flex-direction: row;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${screenWidth * 0.14}px;
  elevation: 5;
`;

export const TextContainer = styled.View`
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.07}px;
  flex-direction: row;
  align-self: center;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: ${screenHeight * 0.03}px;
`;

export const ModalContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.22}px;
  flex-direction: column;
  margin-top: ${screenHeight * 0.3}px;
  align-self: center;
`;

export const CloseContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${colors.modal};
  border-radius: ${screenWidth * 0.14}px;
  position: absolute;
  bottom: ${screenWidth * 0.18}px;
  left: ${screenWidth * 0.76}px;
  elevation: 5;
`;

export const AddText = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: ${screenWidth * 0.038}px;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
  align-self: center;
  justify-content: flex-end;
`;
