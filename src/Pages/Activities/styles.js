import styled from "styled-components/native";
import {
  screenHeight,
  screenWidth,
  colors,
  fonts,
} from "../../Constants/constants";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f8f8f8;
  flex-direction: column;
`;

export const Scroll = styled.ScrollView`
  position: absolute;
  top: ${screenHeight * 0.08}px;
  align-self: center;
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: ${screenWidth * 0.033}px;
  margin-left: ${(props) => props.marginLeft}px;
  color: ${(props) => props.color};
  font-weight: normal;
  margin-top: ${(props) => props.marginTop}px;
`;

export const LineView = styled.View`
  width: ${screenWidth * 0.93}px;
  height: ${screenWidth * 0.004}px;
  background-color: ${colors.line};
  align-self: center;
`;
