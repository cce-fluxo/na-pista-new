import React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  Title,
  ItemContainer,
  Text,
  ButtonIncrementContainer,
} from "./styles";
import { colors } from "../../Constants/constants";

export default IncrementUnitaryContainer = ({
  title,
  value,
  setValue,
  marginTop,
  marginLeft,
  color,
}) => {
  function Increment() {
    setValue(value + 1);
  }

  function Decrement() {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  }

  return (
    <Container marginTop={marginTop} marginLeft={marginLeft} color={color}>
      <Title>{title}</Title>
      <ItemContainer>
        <ButtonIncrementContainer onPress={() => Decrement()}>
          <AntDesign name="minuscircleo" size={24} color={colors.modalIcons} />
        </ButtonIncrementContainer>
        <Text>{value}</Text>
        <ButtonIncrementContainer onPress={() => Increment()}>
          <AntDesign name="pluscircleo" size={24} color={colors.modalIcons} />
        </ButtonIncrementContainer>
      </ItemContainer>
    </Container>
  );
};
