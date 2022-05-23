import React from "react";

import { Container, Title, InputText, TextError } from "./styles";

const Input = ({
  title,
  marginTop,
  marginLeft,
  placeholder,
  secureTextEntry,
  keyboardType,
  error,
  touched,
  onChangeText,
  value,
  onSubmitEditing,
  onBlur,
  autoCapitalize,
  autoComplete,
}) => (
  <Container marginTop={marginTop} marginLeft={marginLeft}>
    <Title>{title}</Title>
    <InputText
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      error={error}
      touched={touched}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
    />
    {error && touched && <TextError>{error}</TextError>}
  </Container>
);

export default Input;
