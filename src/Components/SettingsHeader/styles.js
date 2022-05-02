import styled from "styled-components/native";

import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const HeaderView = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.077}px;
  background-color: ${colors.background};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  margin-left: ${screenWidth*0.067}px;
`;

export const HeaderText = styled.Text`
  color: ${colors.icon};
  font-family: ${fonts.Ubuntu};
  font-size: 20px;
  margin-left: ${screenWidth*0.134}px;
`;
