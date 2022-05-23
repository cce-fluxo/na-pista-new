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
  align-self: center;
  align-items: flex-start;
  margin-top: 10px;
`;

export const ModalContainer = styled.View`
  padding-bottom: 20px;
  background-color: white;
  height: ${screenHeight * 0.3}px;
`;

export const AddContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  width: ${screenWidth * 0.817}px;
  flex-direction: row;
`;

export const AddText = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: 14px;
  color: black;
  margin-left: 10px;
`;

export const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: ${screenHeight * 0.03}px;
  max-width: ${screenWidth * 0.07}px;
  margin-right: 5px;
`;

export const TitleContainer = styled.View`
  padding: 20px;
  margin-top: 10px;
  max-height: ${screenHeight * 0.1}px;
  max-width: ${screenWidth}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
  font-size: ${(props) => props.fontSize}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  color: ${(props) => props.color};
  font-weight: normal;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(0, 0, 0, 0.5)",
  selectionColor: "black",
})`
  width: ${screenWidth * 0.76}px;
  height: 60px;
  background-color: white;
  border-radius: 3.5px;
  padding: 10px;
  align-self: center;
  margin-bottom: 15px;
`;
