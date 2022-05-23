import React from "react";
import { Container, TitleContainer, Text, ButtonContainer } from "./styles";

import Button from "../../Components/Button";

export default function Success({ navigation }) {
  return (
    <Container>
      <TitleContainer>
        <Text title={true}>Sucesso</Text>
        <Text>Tudo certo! Vamos começar?</Text>
      </TitleContainer>
      <ButtonContainer>
        <Button
          width={"90%"}
          text="Começar"
          marginTop={350}
          marginLeft={0}
          background={"white"}
          size={18}
          onPress={() => navigation.navigate("Home")}
        />
      </ButtonContainer>
    </Container>
  );
}
