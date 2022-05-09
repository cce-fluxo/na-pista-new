import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MiniView = styled.View`
  background-color: white;
  height: ${props => props.height};
  width: ${props => props.width};
  margin-top: ${props => props.marginTop};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: black;
  font-size: 18px;
  font-family: ${props => props.fontFamily};
  margin-left: ${props => props.marginLeft};
`;
