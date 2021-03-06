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
  max-height: ${screenHeight * 0.15}px;
  margin-left: 8px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const Text = styled.Text`
  font-family: ${(props) => {
    return props.title ? fonts.Ubuntu : fonts.UbuntuRegular;
  }};
  font-size: ${(props) => {
    return props.title ? "24px" : "16px";
  }};
  line-height: 30px;

  line-height: ${(props) => {
    return props.title ? "30px" : "20px";
  }};

  padding-top: ${(props) => {
    return props.title ? "0px" : "15px";
  }};

  color: ${(props) => {
    return props.title ? "black" : colors.inputTitle;
  }};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 36px;
`;

export const AddContainer = styled.View`
  flex: 1;
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

export const ModalContainer = styled.View`
  padding-bottom: 20px;
  background-color: white;
  max-height: ${screenHeight * 0.5}px;
  border-radius: 5px;
`;

export const FlatList = styled.FlatList`
  margin-top: 20px;
`;
