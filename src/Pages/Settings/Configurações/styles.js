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
  border-radius: 8px;
`;

export const TitleText = styled.Text`
  color: black;
  font-size: 18px;
  font-family: ${props => props.fontFamily};
  margin-left: ${props => props.marginLeft};
`;

export const MaxView = styled.View`
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width};
  margin-top: ${props => props.marginTop};
  border-radius: 8px;
`;

export const LineView = styled.View`
  background-color: rgba(33, 33, 33, 0.08);
  height: 1px;
  width: ${props => props.width};
`;

export const NormalText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-family: ${props => props.fontFamily};
  width: ${props => props.width};
  margin-top: ${props => props.marginTop};
`;
