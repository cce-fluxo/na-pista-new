import styled from "styled-components/native";

import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  max-width: ${screenWidth * 0.3}px;
`;

export const ProgressBarContainer = styled.View`
  width: ${(props) => props.width}px;
  transform: rotate(-90deg);
`;

export const TextContainer = styled.View`
  text-align: center;
  height: ${screenHeight * 0.024}px;
  margin-top: 34px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: ${fonts.Ubuntu};
`;
