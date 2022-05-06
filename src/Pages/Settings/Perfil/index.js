import React, { useState } from "react";
import { ScrollView } from "react-native";

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

  const [initialList, setInitialList] = useState([
    {
      id: 1,
      title: "iFood",
    },
    {
      id: 2,
      title: "Rappi",
    },
    {
      id: 3,
      title: "Uber Eats",
    },
    {
      id: 4,
      title: "Loggi",
    },
    {
      id: 5,
      title: "Zé Delivery",
    },
    {
      id: 6,
      title: "99 Food",
    },
    {
      id: 7,
      title: "James",
    },
  ]);

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
            data={initialList}
            marginTop={screenHeight * 0.025}
          />
          <Date
            label="Data de nascimento"
            marginTop={screenHeight * 0.025}
            marginLeft={0}
          />
          <Dropdown
            label="Estado"
            date={initialList}
            marginTop={screenHeight * 0.025}
          />
          <Dropdown
            label="Cidade"
            data={initialList}
            marignTop={screenHeight * 0.025}
          />
          <Dropdown
            label="Bairro"
            date={initialList}
            marginTop={screenHeight * 0.025}
          />
          <Button
            width={screenWidth * 0.91}
            marginLeft={0}
            marginTop={screenHeight * 0.3}
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
