import React from "react";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../Constants/constants";
import {
  ProgressBarContainer,
  Container,
  Label,
  TextContainer,
} from "./styles";

const Progress = ({
  color,
  text,
  progress,
  height,
  borderRadius,
  width,
  transform,
}) => (
  <Container
    text={text}
    color={color}
    progress={progress}
    height={height}
    borderRadius={borderRadius}
    width={width}
  >
    <ProgressBarContainer width={width}>
      <ProgressBar
        progress={progress}
        color={colors.background}
        style={{ height: height, borderRadius: borderRadius }}
      />
    </ProgressBarContainer>
    <TextContainer>
      <Label color={color}>{text}</Label>
    </TextContainer>
  </Container>
);

export default Progress;
