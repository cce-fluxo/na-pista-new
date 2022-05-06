import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const OutsideView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
`;

export const ModalView = styled.View`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ExportText = styled.Text`
  margin-top: ${props => props.marginTop}px;
  width: ${props => props.width}px;
  color: ${props => props.color};
  font-size: 14px;
  font-family: ${props => props.fontFamily};
`;
