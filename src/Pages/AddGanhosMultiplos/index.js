import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import SafeArea from "../../Utils/SafeArea/index";
import Header from "../../Components/SettingsHeader/index";
import Dropdown from "../../Components/Dropdown/index";
import Input from "../../Components/Input/index";
import IncrementUnitaryContainer from "../../Components/IncrementUnitaryContainer/index";
import Button from "../../Components/Button/index";
import { Container, AddView, AddText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import api from "../../Services/api";

export default function AddGanhosMultiplos({ navigation }) {
  const [name, setName] = useState("");
  const [period, setPeriod] = useState("");
  const [races, setRaces] = useState(0);
  const [amount, setAmount] = useState(0);
  const [extraAmount, setExtraAmount] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const [vendors, setVendors] = useState([]);
  const periods = [
    {
      id: "1",
      name: "Hoje",
    },
    {
      id: "2",
      name: "Ontem",
    },
    {
      id: "3",
      name: "Esta semana",
    },
    {
      id: "4",
      name: "Semana passada",
    },
    {
      id: "5",
      name: "Este mês",
    },
    {
      id: "5",
      name: "Mês passado",
    },
  ];
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getPlataforms() {
    try {
      response = await api.get("/vendors");
      setVendors(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addEarning() {
    setLoading(true);
    try {
      console.log(name, period, races, amount, extraAmount, distance, duration);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getPlataforms();
  }, []);

  return (
    <SafeArea>
      <Container>
        <Header
          name="Adicionar ganhos múltiplos"
          onPressNavigate={() => navigation.navigate("Inicio")}
        />
        <ScrollView>
          <Dropdown
            label="Plataforma"
            data={vendors}
            marginTop={screenHeight * 0.025}
            setOption={setName}
          />
          <Dropdown
            label="Período"
            data={periods}
            marginTop={screenHeight * 0.025}
            option="Selecione..."
            setOption={setPeriod}
          />
          <IncrementUnitaryContainer
            title="Número de corridas"
            value={races}
            setValue={setRaces}
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            color="#F8F8F8"
          />
          <Input
            title="Valor total"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="R$"
          />
          {!click ? (
            <AddView
              width={screenWidth * 0.9}
              marginTop={screenHeight * 0.025}
              marginLeft={0}
            >
              <TouchableOpacity onPress={() => setClick(true)}>
                <AddText
                  marginLeft={screenWidth * 0.001}
                  color={colors.modalIcons}
                  font={fonts.Ubuntu}
                >
                  + Adicionar gorjeta
                </AddText>
              </TouchableOpacity>
            </AddView>
          ) : (
            <Input
              title="Total de gorjeta"
              marginLeft={0}
              marginTop={screenHeight * 0.025}
              value={extraAmount}
              onChangeText={(text) => setExtraAmount(text)}
              placeholder="R$"
            />
          )}
          <Input
            title="Distância percorrida"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={distance}
            onChangeText={(text) => setDistance(text)}
            placeholder="km"
          />
          <Input
            title="Duração total"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={duration}
            onChangeText={(text) => setDuration(text)}
            placeholder="min"
          />
          <Button
            width={screenWidth * 0.91}
            marginLeft={0}
            marginTop={screenHeight * 0.05}
            disabled={loading}
            loading={loading}
            text="Adicionar"
            onPress={addEarning}
            color="black"
            background={colors.modalIcons}
            size={16}
            textColor="white"
          />
          <View style={{ height: screenHeight * 0.025 }}></View>
        </ScrollView>
      </Container>
    </SafeArea>
  );
}
