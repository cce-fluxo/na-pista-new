import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  BottomText,
  UnderlineText,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import api from "../../Services/api";

export default function CreateAccount({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function checkEmail() {
    setLoading(true);
    if (password === confirmPassword) {
      try {
        const isAvailable = await api.post("/auth/email-availability", {
          email,
          password,
        });
        console.log(isAvailable)
        if (!isAvailable) {
          showMessage({
            message: "Email ou senha não disponíveis!",
            type: "danger",
            icon: "danger",
          });
        } else {
          navigation.navigate("Informacoes basicas", { email, password });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      showMessage({
        message: "Senhas diferentes!",
        type: "danger",
        icon: "danger",
      });
    }
    setLoading(false);
  }

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text>Criar conta</Text>
        </TitleContainer>
        <Input
          title={"Login"}
          marginLeft={0}
          marginTop={0}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoComplete="email"
          placeholder=""
        />
        <Input
          title={"Senha"}
          marginLeft={0}
          marginTop={30}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder=""
        />
        <Input
          title={"Repita a senha"}
          marginLeft={0}
          marginTop={30}
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder=""
        />
        <ButtonContainer>
          <Button
            width={"90%"}
            text="Próximo"
            marginTop={350}
            marginLeft={0}
            background={"white"}
            size={18}
            onPress={checkEmail}
          />
          <BottomText>
            Ao realizar seu cadastro você concorda com nossos {""}
            <UnderlineText>Termos de Uso</UnderlineText> {""}e{" "}
            <UnderlineText>Termos de Privacidade.</UnderlineText>
          </BottomText>
        </ButtonContainer>
      </Container>
    </SafeArea>
  );
}
