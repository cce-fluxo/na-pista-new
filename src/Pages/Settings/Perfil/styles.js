import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const FormsView = styled.View`
  flex: 1;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
