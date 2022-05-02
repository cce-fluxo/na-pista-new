import styled from "styled-components/native";

import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const HeaderView = styled.View`
  flex: 1;
  width: ${screenWidth};
  height: ${screenHeight * 0.077};
  background-color: ${colors.background};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  margin-left: ${screenWidth*0.067};
`;

export const HeaderText = styled.Text`
  color: ${colors.icon};
  font-family: ${fonts.Ubuntu};
  font-size: 20px;
  margin-left: ${screenWidth*0.134};
`;
