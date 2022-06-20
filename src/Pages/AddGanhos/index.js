import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";

import SafeArea from "../../Utils/SafeArea/index";
import Header from "../../Components/SettingsHeader/index";
import Dropdown from "../../Components/Dropdown/index";
import Input from "../../Components/Input/index";
import Date from "../../Components/Date/index";
import Button from "../../Components/Button/index";
import { Container, AddView, AddText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import api from "../../Services/api";

export default function AddGanhos({ navigation, route }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("2022-06-20T16:09:19.222Z");
  const [amount, setAmount] = useState(0);
  const [extraAmount, setExtraAmount] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const [vendors, setVendors] = useState([]);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getPlataforms() {
    try {
      const response = await api.get("/vendors");
      setVendors(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addEarning() {
    setLoading(true);
    try {
      const response = await api.post("/earnings", {
        extraAmount: extraAmount,
        amount: amount,
        distance: distance,
        duration: duration,
        vendor: {
          name: name
        },
        date: date
      });
      console.log(response);
      showMessage({
        message: "Cadastro do ganho efetuado com sucesso!",
        type: "success",
        icon: "success",
        duration: 4000,
      });
      navigation.navigate("Inicio");
    } catch (error) {
      showMessage({
        message: "Nao foi possível cadastrar o ganho!",
        type: "danger",
        icon: "danger",
      });
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
          name="Adicionar ganho"
          onPressNavigate={() => navigation.navigate("Inicio")}
        />
        <Dropdown
          label="Plataforma"
          data={vendors}
          marginTop={screenHeight * 0.025}
          option="Selecione..."
          setOption={setName}
        />
        <Date label="Data" marginTop={screenHeight * 0.025} marginLeft={0} />
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
                color={colors.background}
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
          placeholder=""
        />
        <Input
          title="Duração total"
          marginLeft={0}
          marginTop={screenHeight * 0.025}
          value={duration}
          onChangeText={(text) => setDuration(text)}
          placeholder=""
        />
        <Button
          width={screenWidth * 0.91}
          marginLeft={0}
          marginTop={screenHeight * 0.1}
          disabled={loading}
          loading={loading}
          text="Adicionar"
          onPress={addEarning}
          color="black"
          background={colors.background}
          border={4}
          size={16}
        />
      </Container>
    </SafeArea>
  );
}
