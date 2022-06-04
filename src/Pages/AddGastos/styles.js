import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MaxContainer = styled.View`
  width: ${(props) => props.width}px;
  align-self: center;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  margin-bottom: 5px;
`;

export const InputContainer = styled.View`
  margin-top: ${(props) => props.marginTop}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: white;
  align-self: center;
`;

export const InputText = styled.TextInput`
  color: black;
  padding: 10px;
`;
