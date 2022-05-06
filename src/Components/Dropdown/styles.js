import styled from "styled-components/native";

import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export const Container = styled.View`
  width: ${screenWidth * 0.817}px;
  max-height: 86px;
  flex: 1;
  align-self: center;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.inputTitle};
  font-family: ${fonts.Ubuntu};
  margin-bottom: 5px;
`;

export const SelectText = styled.Text`
  align-self: center;
  color: black;
`;

export const SelectContainer = styled.TouchableOpacity`
  flex: 1;
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

export const ModalContainer = styled.View`
  padding-bottom: 20px;
  background-color: white;
  max-height: ${screenHeight * 0.5}px;
  border-radius: 5px;
`;
export const ItemContainer = styled.TouchableOpacity`
  width: 90%;
  height: 36px;
  margin-top: ${(props) => props.marginTop}px;

  border-radius: 5px;
  background-color: ${colors.background};
  color: ${(props) => {
    return props.color ? props.color : "black";
  }};

  align-self: center;
  align-items: center;
  justify-content: center;
`;
