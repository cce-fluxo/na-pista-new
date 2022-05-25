import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainer = styled.View`
  width: ${(props) => props.width}px;
  flex: 1;
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

export const AddView = styled.View`
  width: ${(props) => props.width}px;
  flex: 1;
  align-self: center;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export const AddText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: ${(props) => props.font};
`;
