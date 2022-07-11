import styled from "styled-components/native";
import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

export const Subcontainer = styled.View`
  background-color: ${colors.background};
  width: ${screenWidth}px;
  height: ${(props) => props.height}px;
`;

export const TextContainer = styled.View`
  padding: ${screenWidth * 0.027}px;
  margin-top: ${(props) => props.marginTop}px;
  max-height: ${screenHeight * 0.1}px;
  max-width: ${(props) => props.maxWidth}px;
  margin-left: ${(props) => props.marginLeft}px;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: ${(props) => props.fontSize}px;
  margin-left: ${(props) => props.marginLeft}px;
  color: ${(props) => props.color};
  font-weight: normal;
  margin-top: ${(props) => props.marginTop}px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  margin-right: ${(props) => props.marginRight}px;
`;

export const ViewContainer = styled.View`
  height: ${screenWidth * 0.08}px;
  width: ${screenWidth * 0.22}px;
  flex-direction: row;
  margin-right: 10px;
  justify-content: space-around;
`;