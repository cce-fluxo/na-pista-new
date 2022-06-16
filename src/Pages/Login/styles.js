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
  font-size: ${(props) => props.fontSize}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  line-height: ${(props) => props.lineHeight}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  align-self: flex-start;
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
  font-style: ${(props) => props.fontstyle};
  font-size: ${screenWidth * 0.038}px;
  margin-top: ${screenWidth * 0.05}px;
  margin-left: ${screenWidth * 0.058}px;
  text-decoration: ${(props) => props.textdecoration};
  color: ${colors.inputTitle};
`;

export const InputView = styled.View`
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  width: ${screenWidth * 0.9}px;
  height: 54px;
  background-color: white;
  border-radius: 5px;
`;

export const InputPass = styled.TextInput.attrs({
  placeholderTextColor: "rgba(0, 0, 0, 0.5)",
  selectionColor: "blue",
})`
  width: ${screenWidth * 0.75}px;
  height: 54px;
  background-color: white;
  padding-left: 20px;
  align-self: center;
  border-radius: 5px;
`;

export const IconButton = styled.TouchableOpacity`
  width: ${screenWidth * 0.15}px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
