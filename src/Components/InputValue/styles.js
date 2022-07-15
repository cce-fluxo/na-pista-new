import styled from "styled-components/native";

import {
  colors,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  max-height: 72px;
  flex: 1;
  align-self: center;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.inputTitle};
  font-family: ${fonts.Ubuntu};
  margin-bottom: 5px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${screenWidth * 0.9}px;
  height: 54px;
  background-color: white;
  border-radius: 3.5px;
  padding-left: 20px;
`;

export const TextValue = styled.Text`
  color: "rgba(0, 0, 0, 0.5)";
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: "rgba(0, 0, 0, 0.5)",
  selectionColor: "blue",
})`
  width: ${screenWidth * 0.8}px;
  height: 54px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: red;
  align-self: flex-start;
`;
