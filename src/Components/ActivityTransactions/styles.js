import styled from "styled-components/native";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import image from "../../Assets/ifood.png";

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: ${screenWidth * 0.04}px;
  margin-right: ${screenWidth * 0.03}px;
  background: #f8f8f8;
  margin-bottom: ${screenWidth * 0.015}px;
`;

export const ViewContainer = styled.TouchableOpacity`
  flex-direction: column;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${screenWidth * 0.02}px;
  width: ${screenWidth * 0.8}px;
`;

export const ImageView = styled.View`
  border-radius: 100px;
  width: ${screenWidth * 0.11}px;
  height: ${screenWidth * 0.11}px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  margin-left: ${screenWidth * 0.033}px;
`;

export const ImageContainer = styled.Image`
  border-radius: 100px;
  width: ${screenWidth * 0.06}px;
  height: ${screenWidth * 0.06}px;
  align-self: center;
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: ${(props) => props.fontSize}px;
  margin-left: ${(props) => props.marginLeft}px;
  color: ${(props) => props.color};
  font-weight: normal;
  margin-top: ${(props) => props.marginTop}px;
  align-self: center;
  text-align: center;
`;
