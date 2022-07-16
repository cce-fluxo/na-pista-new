import React from "react";

import {
  Container,
  Title,
  InputContainer,
  TextPlaceholder,
  InputText,
  TextError,
} from "./styles";

const InputValue = ({
  title,
  marginTop,
  marginLeft,
  secureTextEntry,
  keyboardType,
  error,
  touched,
  onChangeText,
  value,
  placeholder,
  onSubmitEditing,
  onBlur,
  autoCapitalize,
  autoComplete,
}) => (
  <Container marginTop={marginTop} marginLeft={marginLeft}>
    <Title>{title}</Title>
    <InputContainer>
      <InputText
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
      <TextPlaceholder>{placeholder}</TextPlaceholder>
    </InputContainer>
    {error && touched && <TextError>{error}</TextError>}
  </Container>
);

export default InputValue;
