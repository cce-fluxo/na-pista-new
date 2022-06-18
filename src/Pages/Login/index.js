import React, { useState } from "react";
import {
  KeyboardAvoidingView,
} from "react-native";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  SignUpButton,
  TextButton,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useAuth } from "../../Contexts/auth";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: `${colors.background}` }}
    >
      <SafeArea>
        <Container>
          <TitleContainer>
            <Text>Login</Text>
          </TitleContainer>
          <Input
            title={"Email"}
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
          <SignUpButton marginleft={0} margintop={screenWidth * 0.02}>
            <TextButton fontstyle={"italic"} textdecoration={"underline"}>
              Esqueci minha senha
            </TextButton>
          </SignUpButton>
          <ButtonContainer>
            <Button
              width={"90%"}
              text="Login"
              marginTop={350}
              marginLeft={0}
              disabled={loading}
              loading={loading}
              background={"white"}
              size={18}
              onPress={() => signIn(email, password, setLoading, navigation)}
            />
          </ButtonContainer>
        </Container>
      </SafeArea>
    </KeyboardAvoidingView>
  );
}
