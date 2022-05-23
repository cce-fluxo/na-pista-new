import styled from "styled-components/native";
import { fonts, colors, screenHeight } from "../../Constants/constants";

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
