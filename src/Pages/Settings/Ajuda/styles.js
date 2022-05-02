import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: "#f8f8f8";
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HelpText = styled.Text`
  margin-top: ${props => props.marginTop};
  width: ${props => props.width}px;
  color: ${props => props.color};
  font-size: 14px;
  font-family: ${props => props.fontFamily};
`;

export const InputText = styled.TextInput`
  color: "black";
  background-color: "white";
  margin-top: ${props => props.marginTop}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;
