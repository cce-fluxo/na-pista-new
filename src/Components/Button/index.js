import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

import { colors } from '../../Constants/constants';

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
        <ActivityIndicator color={colors.background} size={'small'} />
      ) : (
        <Text size={size}> {text}</Text>
      )}
    </Container>
  );
};

export default Button;
