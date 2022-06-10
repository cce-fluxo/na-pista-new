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

export const PeriodView = styled.View`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

export const PeriodOpacity = styled.TouchableOpacity`
`;

export const PeriodSubView = styled.View`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: ${(props) => props.borderBottom};
`;

export const PeriodText = styled.Text`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-size: 14px;
`;

export const TimeView = styled.View`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const GGView = styled.View`
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: white;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
`;

export const GGSubView = styled.View`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultText = styled.Text`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-size: 34px;
`;

export const LineView = styled.View`
  width: 1px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
`;

export const ResultView = styled.View`
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 4px;
  background-color: white;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const ResultSubView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  align-self: center;
`;
