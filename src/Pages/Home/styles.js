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

export const Container = styled.View`
  background-color: #f8f8f8;
  width: ${screenWidth}px;
`;

export const View = styled.View`
  background-color: white;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  elevation: ${(props) => props.elevation};
  align-self: center;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export const Subcontainer = styled.View`
  background-color: ${colors.background};
  width: ${screenWidth}px;
  height: ${screenHeight * 0.32}px;
`;

export const ScrollView = styled.ScrollView`
  position: absolute;
  top: ${screenHeight * 0.1}px;
  align-self: center;
`;

export const EarningContainer = styled.View`
  background-color: white;
  flex-direction: column;
  width: ${screenWidth * 0.86}px;
  height: ${screenHeight * 0.32}px;
  border-radius: 8px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-bottom: ${screenWidth * 0.014}px;
  elevation: 4;
`;

export const TextContainer = styled.View`
  padding: ${screenWidth * 0.027}px;
  margin-top: ${(props) => props.marginTop}px;
  max-height: ${screenHeight * 0.1}px;
  max-width: ${(props) => props.maxWidth}px;
  margin-left: ${(props) => props.marginLeft}px;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
`;

export const Text = styled.Text`
  font-family: ${fonts.Ubuntu};
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

export const ProgressBarContainer = styled.View`
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  align-self: center;
  transform: ${(props) => (props.rotate ? "rotate(90deg)" : "")};
  margin-top: ${(props) => props.marginTop}px;
`;

export const ActivityButton = styled.TouchableOpacity`
  width: ${screenWidth * 0.14}px;
  height: ${screenHeight * 0.085}px;
  background-color: ${colors.background};
  border-radius: 50px;
  margin-left: ${screenWidth * 0.044}px;
  margin-top: ${screenWidth * 0.034}px;
  align-items: center;
  justify-content: center;
  elevation: 4;
`;

export const TimeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${screenWidth * 0.9}px;
`;

export const LineView = styled.View`
  width: ${screenWidth * 0.8}px;
  height: ${screenWidth * 0.004}px;
  background-color: ${colors.line};
  align-self: center;
`;
