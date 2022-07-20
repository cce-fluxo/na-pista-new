import React from "react";

import { Container, TitleContainer, Text, ButtonContainer } from "./styles";
import Button from "../../Components/Button";
import { useAuth } from "../../Contexts/auth";

export default function Success({ navigation }) {
  const { setUser } = useAuth();

  async function nextScreen() {
    try {
      const response = api.get("/me");
      setUser(response.data);
      navigation.navigate("SignedIn");
    } catch(error) {
      console.log(error);
    }
  }

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
          onPress={nextScreen}
        />
      </ButtonContainer>
    </Container>
  );
}
