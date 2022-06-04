import styled from "styled-components/native";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import image from "../../Assets/ifood.png";

export const Container = styled.View`
  align-self: center;
  justify-content: flex-start;
  margin-top: ${screenWidth * 0.04}px;
  margin-bottom: ${screenWidth * 0.02}px;
  margin-right: ${screenWidth * 0.03}px;
  background: #f8f8f8;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 100px;
  elevation: 4;
`;

export const ViewContainer = styled.TouchableOpacity`
  justify-content: space-around;
  padding: 5px;
  flex-direction: row;
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
