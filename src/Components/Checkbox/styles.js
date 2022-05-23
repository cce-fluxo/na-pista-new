import styled from 'styled-components/native';
import { screenWidth } from '../../Constants/constants';

export const Container = styled.View`
  margin-top: ${props => props.marginTop}px;
  width: ${screenWidth * 0.817}px;
  flex:1;
  align-self: center;
  align-items: flex-start;
`;