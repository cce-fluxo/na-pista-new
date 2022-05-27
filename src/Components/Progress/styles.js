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
  height: ${screenHeight * 0.04}px;
  margin-top: ${screenWidth * 0.05}px;
`;

export const Label = styled.Text`
  font-size: ${screenWidth * 0.035}px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: ${fonts.Ubuntu};
`;
