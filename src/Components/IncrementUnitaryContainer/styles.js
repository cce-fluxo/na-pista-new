import styled from "styled-components/native";
import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

export const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  max-height: 85px;
  align-self: center;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  background-color: ${(props) => props.color};
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.inputTitle};
  font-family: ${fonts.Ubuntu};
  margin-bottom: 5px;
`;

export const ItemContainer = styled.View`
  align-self: center;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 3.5px;
  width: 100%;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  height: 54px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.inputTitle};
  font-family: ${fonts.Ubuntu};
  text-align: center;
  justify-content: center;
`;

export const ButtonIncrementContainer = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  background-color: white;
`;
