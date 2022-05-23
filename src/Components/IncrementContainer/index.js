import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  ItemContainer,
  Text,
  ButtonIncrementContainer,
} from "./styles";

import Icon from "react-native-vector-icons/Entypo";

const IncrementContainer = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [actualItem, setActualItem] = useState({});

  function Increment() {
    setQuantity(quantity + 50);
  }

  function Decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 50);
    } else {
      setQuantity(0);
    }
  }

  return (
    <Container
      marginTop={props.marginTop}
      marginLeft={props.marginLeft}
      color={props.color}
    >
      <Title>{props.title}</Title>
      <ItemContainer>
        <ButtonIncrementContainer onPress={() => Decrement()}>
          <Icon name="minus" size={25} />
        </ButtonIncrementContainer>
        <Text>R${quantity}</Text>
        <ButtonIncrementContainer onPress={() => Increment()}>
          <Icon name="plus" size={25} />
        </ButtonIncrementContainer>
      </ItemContainer>
    </Container>
  );
};

export default IncrementContainer;
