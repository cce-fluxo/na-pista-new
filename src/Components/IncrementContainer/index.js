import React from "react";
import Icon from "react-native-vector-icons/Entypo";

import {
  Container,
  Title,
  ItemContainer,
  Text,
  ButtonIncrementContainer,
} from "./styles";

const IncrementContainer = (props) => {

  function Increment() {
    props.setQuantity(props.quantity + props.interval);
  }

  function Decrement() {
    if (props.quantity - props.interval > 0) {
      props.setQuantity(props.quantity - props.interval);
    } else {
      props.setQuantity(0);
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
        <Text>R${props.quantity}</Text>
        <ButtonIncrementContainer onPress={() => Increment()}>
          <Icon name="plus" size={25} />
        </ButtonIncrementContainer>
      </ItemContainer>
    </Container>
  );
};

export default IncrementContainer;
