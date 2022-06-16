import React, { useState } from "react";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  SignUpButton,
  TextButton,
  InputView,
  InputPass,
  IconButton,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useAuth } from "../../Contexts/auth";
import { Ionicons } from "@expo/vector-icons";
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
  const [hidePass, setHidePass] = useState(true);
  const { signIn } = useAuth();

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text
            fontSize={screenWidth * 0.066}
            marginLeft={screenWidth * 0.022}
            lineHeight={screenWidth * 0.0833}
            marginTop={screenWidth * 0.055}
            fontWeight={400}
            color={"black"}
            marginBottom={0}
          >
            Login
          </Text>
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
        <Text
          fontSize={18}
          marginLeft={screenWidth * 0.05}
          lineHeight={screenWidth * 0.0833}
          marginTop={screenWidth * 0.06}
          marginBottom={0}
          fontWeight={"bold"}
          color={colors.inputTitle}
        >
          Senha
        </Text>
        <InputView>
          <InputPass
            marginLeft={0}
            marginTop={0}
            secureTextEntry={hidePass}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder=""
          />
          <IconButton onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <Ionicons
                name="eye"
                color={colors.inputTitle}
                size={screenWidth * 0.07}
              />
            ) : (
              <Ionicons
                name="eye-off"
                color={colors.inputTitle}
                size={screenWidth * 0.07}
              />
            )}
          </IconButton>
        </InputView>

        <SignUpButton marginleft={0} margintop={screenWidth * 0.005}>
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
  );
}
