import React from "react";

import {
  Container,
  Title,
  InputContainer,
  TextValue,
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
  onSubmitEditing,
  onBlur,
  autoCapitalize,
  autoComplete,
}) => (
  <Container marginTop={marginTop} marginLeft={marginLeft}>
    <Title>{title}</Title>
    <InputContainer>
      <TextValue>R$ </TextValue>
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
    </InputContainer>
    {error && touched && <TextError>{error}</TextError>}
  </Container>
);

export default InputValue;
