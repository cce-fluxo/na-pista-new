import React, { useState } from "react";

import SafeArea from "../../../Utils/SafeArea/index";
import Header from "../../../Components/SettingsHeader/index";
import Button from "../../../Components/Button/index";
import { Container, HelpText, InputText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../Constants/constants";

export default function SettingsHelp({ navigation }) {
  const [help, setHelp] = useState("");
  const [loading, setLoading] = useState(false);

  async function addHelp() {
    setLoading(true);
    try {
      console.log(help);
    } catch (error) {
      console.error(error);
    }
    setLoading(true);
  }

  return (
    <SafeArea>
      <Container>
        <Header
          name="Ajuda"
          onPressNavigate={() => navigation.navigate("SettingsMenu")}
        />
        <HelpText
          marginTop={screenHeight * 0.022}
          width={screenWidth * 0.91}
          color={colors.inputTitle}
          fontFamily={fonts.Ubuntu}
        >
          Digite sua mensagem que lhe responderemos no seu email assim que
          possível.
        </HelpText>
        <InputText
          marginTop={screenHeight * 0.007}
          height={screenHeight * 0.38}
          width={screenWidth * 0.91}
          placeholder="Digite sua mensagem"
          onChangeText={(text) => setHelp(text)}
          value={help}
          multiline={true}
        />
        <Button
          width={screenWidth * 0.91}
          marginLeft={0}
          marginTop={screenHeight*0.30}
          disabled={loading}
          loading={loading}
          text="Enviar"
          onPress={addHelp}
          color="black"
          background={colors.background}
          border={4}
          size={16}
        />
      </Container>
    </SafeArea>
  );
}
