import React from "react";
import { ActivityIndicator } from "react-native";

import { Container, Text } from "./styles";

import { colors } from "../../Constants/constants";

const Button = ({
  width,
  marginLeft,
  marginTop,
  disabled,
  loading,
  text,
  onPress,
  color,
  background,
  border,
  size,
  textColor
}) => {
  return (
    <Container
      width={width}
      marginTop={marginTop}
      marginLeft={marginLeft}
      disabled={disabled || loading}
      onPress={onPress}
      color={color}
      background={background}
      border={border}
    >
      {loading ? (
        <ActivityIndicator color={colors.background} size={"small"} />
      ) : (
        <Text size={size} textColor={textColor}> {text}</Text>
      )}
    </Container>
  );
};

export default Button;
