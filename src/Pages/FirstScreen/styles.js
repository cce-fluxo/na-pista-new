import styled from "styled-components/native";
import { fonts, colors, screenHeight } from "../../Constants/constants";

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
`;

export const Image = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: flex-start;

  padding-top: 20px;
  padding-left: 10px;

  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-family: ${(props) => {
    return props.title ? fonts.BebasNeue : fonts.Ubuntu;
  }};
  font-size: ${(props) => {
    return props.title ? "100px" : "24px";
  }};
  line-height: ${(props) => {
    return props.title ? "80px" : "20px";
  }};
  margin-left: ${(props) => {
    return props.title ? "0px" : "8px";
  }};
  padding-top: ${(props) => {
    return props.title ? "20px" : "5px";
  }};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 36px;
`;
