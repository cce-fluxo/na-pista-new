import styled from "styled-components/native";

import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

export const MainContainer = styled.ScrollView`
  flex: 1;
`;

export const Subcontainer = styled.View`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const TextContainer = styled.View`
  padding: ${screenWidth * 0.027}px;
  margin-top: ${(props) => props.marginTop}px;
  max-height: ${(props) => props.maxHeight}px;
  max-width: ${(props) => props.maxWidth}px;
  margin-left: ${(props) => props.marginLeft}px;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
`;

export const TitleText = styled.Text`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  margin-left: ${(props) => props.marginLeft}px;
  color: ${(props) => props.color};
  font-weight: normal;
  margin-top: ${(props) => props.marginTop}px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  margin-right: ${(props) => props.marginRight}px;
`;
