import styled from "styled-components/native";
import { fonts } from "../../Constants/constants";

export const Container = styled.TouchableOpacity`
  width: ${(props) => props.width};
  height: 36px;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  color: ${(props) => {
    return props.color ? props.color : "black";
  }};
  border: ${(props) => {
    return props.border ? "1px solid black" : "0px";
  }};
  align-self: center;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Text = styled.Text`
  color: ${(props) => {
    return props.textColor ? props.textColor : "black";
  }};
  font-size: ${(props) => props.size}px;
  font-weight: bold;
  align-self: center;
  font-family: ${fonts.Ubuntu};
`;
