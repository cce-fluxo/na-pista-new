import styled from "styled-components/native";

import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: ${screenWidth * 0.3}px;
  transform: rotate(-90deg);
`;

export const ProgressBarContainer = styled.View`
  width: ${screenWidth * 0.18}px;
`;

export const TextContainer = styled.View`
  text-align: center;
  transform: rotate(90deg);
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: ${fonts.Ubuntu};
  margin-bottom: 5px;
`;
