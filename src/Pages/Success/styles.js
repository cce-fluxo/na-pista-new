import styled from "styled-components/native";
import { fonts, colors, screenHeight } from "../../Constants/constants";

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 10px;
  max-height: ${screenHeight * 0.3}px;
  margin-left: 8px;
  margin-top: 50px;
`;

export const Text = styled.Text`
  font-family: ${(props) => {
    return props.title ? fonts.Ubuntu : fonts.UbuntuRegular;
  }};
  font-size: ${(props) => {
    return props.title ? "24px" : "48px";
  }};

  line-height: 50px;

  padding-top: ${(props) => {
    return props.title ? "0px" : "15px";
  }};

  color: black;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 36px;
`;
