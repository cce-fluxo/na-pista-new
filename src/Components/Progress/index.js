import React from "react";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../Constants/constants";
import {
  ProgressBarContainer,
  Container,
  Label,
  TextContainer,
} from "./styles";

const Progress = ({color, text, progress}) => (
  <Container text={text} color={color} progress={progress} >
    <TextContainer >
      <Label color={color}>{text}</Label>
    </TextContainer>
    <ProgressBarContainer>
      <ProgressBar
        progress={progress}
        color={colors.background}
        style={{ height: 17 }}
      />
    </ProgressBarContainer>
  </Container>
);

export default Progress;
