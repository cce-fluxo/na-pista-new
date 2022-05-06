import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import SafeArea from "../../../Utils/SafeArea/index";
import Header from "../../../Components/SettingsHeader/index";
import Input from "../../../Components/Input/index";
import Dropdown from "../../../Components/Dropdown/index";
import Date from "../../../Components/Date/index";
import Button from "../../../Components/Button/index";
import { Container, FormsView } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../Constants/constants";

export default function SettingsPerfil({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [genero, setGenero] = useState("");
  const [data, setData] = useState(0);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [loading, setLoading] = useState(false);

  const dataGenero = [
    {
      id: "1",
      value: "f",
      label: "Feminino",
    },
    {
      id: "2",
      value: "m",
      label: "Masculino",
    },
  ];

  const dataState = [
    {
      id: "1",
      value: "rj",
      label: "RJ",
    },
    {
      id: "2",
      value: "sp",
      label: "SP",
    },
  ];

  const dataCity = [
    {
      id: "1",
      value: "rio",
      label: "Rio de Janeiro",
    },
    {
      id: "2",
      value: "saoPaulo",
      label: "São Paulo",
    },
  ];

  const dataNeighborhood = [
    {
      id: "1",
      value: "botafogo",
      label: "Botafogo",
    },
    {
      id: "2",
      value: "morumbi",
      label: "Morumbi",
    },
    {
      id: "3",
      value: "copa",
      label: "Copacabana",
    },
    {
      id: "4",
      value: "fla",
      label: "Flamengo",
    },
  ];

  try {
  } catch (error) {
    console.log(error);
  }

  async function patchUser() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeArea>
      <Container>
        <Header
          name="Perfil"
          onPressNavigate={() => navigation.navigate("SettingsMenu")}
        />
        <ScrollView>
          <Input
            title="Nome"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder={nome}
          />
          <Input
            title="Sobrenome"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={sobrenome}
            onChangeText={(text) => setSobrenome(text)}
            placeholder={sobrenome}
          />
          <Dropdown
            label="Identidade de gênero"
            data={dataGenero}
            marginTop={30}
          />
          <Date
            label="Data de nascimento"
            marginTop={screenHeight * 0.025}
            marginLeft={0}
          />
          <Dropdown label="Estado" date={dataState} marginTop={30} />
          <Dropdown label="Cidade" data={dataCity} marignTop={30} />
          <Dropdown label="Bairro" date={dataNeighborhood} marginTop={30} />
          <Button
            width={screenWidth * 0.91}
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            disabled={loading}
            loading={loading}
            text="Atualizar"
            onPress={patchUser}
            color="black"
            background={colors.background}
            border={4}
            size={16}
          />
        </ScrollView>
      </Container>
    </SafeArea>
  );
}
