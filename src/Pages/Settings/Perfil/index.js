import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import SafeArea from "../../../Utils/SafeArea";
import Header from "../../../Components/SettingsHeader";
import Input from "../../../Components/Input";
import Dropdown from "../../../Components/Dropdown";
import Date from "../../../Components/Date";
import Button from "../../../Components/Button";
import { Container } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
  dataState
} from "../../../Constants/constants";
import api from "../../../Services/api";
import { useAuth } from "../../../Contexts/auth";

export default function SettingsPerfil({ navigation }) {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [birthDate, setBirthDate] = useState(user.birthDate);
  const [state, setState] = useState(user.state);
  const [city, setCity] = useState(user.city);
  const [neighborhood, setNeighborhood] = useState(user.neighborhood);
  const [loading, setLoading] = useState(false);

  const dataGenero = [
    {
      id: "1",
      name: "Feminino",
    },
    {
      id: "2",
      name: "Masculino",
    },
    {
      id: "3",
      name: "Não binário"
    },
    {
      id: "4",
      name: "Não declarado"
    }
  ];

  const dataCity = [
    {
      id: "1",
      name: "Rio de Janeiro",
    },
    {
      id: "2",
      name: "São Paulo",
    },
  ];

  const dataNeighborhood = [
    {
      id: "1",
      name: "Botafogo",
    },
    {
      id: "2",
      name: "Morumbi",
    },
    {
      id: "3",
      name: "Copacabana",
    },
    {
      id: "4",
      name: "Flamengo",
    },
  ];

  async function patchUser() {
    setLoading(true);
    const data = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthDate: birthDate,
      state: state,
      city: city,
      neighborhood: neighborhood,
    };
    try {
      response = await api.patch("/me", data);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  return (
    <SafeArea>
      <Container>
        <Header
          name="Perfil"
          onPressNavigate={() => navigation.navigate("Menu Configurações")}
        />
        <ScrollView>
          <Input
            title="Nome"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder={firstName}
          />
          <Input
            title="Sobrenome"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder={lastName}
          />
          <Dropdown
            label="Identidade de gênero"
            data={dataGenero}
            marginTop={screenHeight * 0.025}
            option={gender}
            setOption={setGender}
          />
          <Date
            label="Data de nascimento"
            marginTop={screenHeight * 0.025}
            marginLeft={0}
            initialText={birthDate}
            setSelectedDate={setBirthDate}
          />
          <Dropdown
            label="Estado"
            data={dataState}
            marginTop={screenHeight * 0.025}
            option={state}
            setOption={setState}
          />
          <Dropdown
            label="Cidade"
            data={dataCity}
            marginTop={screenHeight * 0.025}
            option={city}
            setOption={setCity}
          />
          <Dropdown
            label="Bairro"
            data={dataNeighborhood}
            marginTop={screenHeight * 0.025}
            option={neighborhood}
            setOption={setNeighborhood}
          />
          <Button
            width={screenWidth * 0.9}
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
          <View style={{ marginBottom: screenHeight * 0.025 }}></View>
        </ScrollView>
      </Container>
    </SafeArea>
  );
}
