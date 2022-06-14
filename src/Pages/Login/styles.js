import styled from "styled-components/native";
import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
  justify-content: space-between;
`;

export const Image = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 10px;
  max-height: ${screenHeight * 0.1}px;
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: 24px;
  line-height: 30px;
  margin-left: 8px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 36px;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: ${(props) => props.marginleft}px;
  margin-top: ${(props) => props.margintop}px;
`;

export const TextButton = styled.Text`
  /* font-family: ${fonts.Ubuntu}; */
  font-style: ${(props) => props.fontstyle};
  font-size: ${screenWidth * 0.038}px;
  margin-top: ${screenWidth * 0.05}px;
  margin-left: ${screenWidth * 0.058}px;
  text-decoration: ${(props) => props.textdecoration};
  color: ${colors.inputTitle};
`;
