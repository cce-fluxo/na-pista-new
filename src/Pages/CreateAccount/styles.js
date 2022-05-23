import styled from "styled-components/native";
import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

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
  padding-left: 20px;
  max-height: ${screenHeight * 0.1}px;
  width: ${screenWidth * 0.817}px;
  flex-direction: row;
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
  margin-top: 60px;
`;

export const BottomText = styled.Text`
  font-family: ${fonts.UbuntuRegular};
  font-size: 14px;
  color: ${colors.inputTitle};
  line-height: 30px;
  margin-top: 10px;
  text-align: center;
  width: ${screenWidth * 0.917}px;
`;

export const UnderlineText = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${colors.inputTitle};
`;

export const IconContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: ${screenHeight * 0.12}px;
  max-width: ${screenWidth * 0.055}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
`;
