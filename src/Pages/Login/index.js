import { useState } from "react";
import { Container, TitleContainer, Text, ButtonContainer } from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

export default function Login({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
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
          onChangeText={onChangeEmail}
          autoComplete="email"
          placeholder=""
        />
        <Input
          title={"Senha"}
          marginLeft={0}
          marginTop={30}
          secureTextEntry
          value={password}
          onChangeText={onChangePassword}
          placeholder=""
        />
        <ButtonContainer>
          <Button
            width={"90%"}
            text="Login"
            marginTop={350}
            marginLeft={0}
            background={"white"}
            size={18}
            onPress={() => navigation.navigate("First")}
          />
        </ButtonContainer>
      </Container>
    </SafeArea>
  );
}
