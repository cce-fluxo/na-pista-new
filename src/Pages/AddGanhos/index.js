import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { showMessage } from "react-native-flash-message";

import SafeArea from "../../Utils/SafeArea";
import Header from "../../Components/SettingsHeader";
import Dropdown from "../../Components/Dropdown";
import InputValue from "../../Components/InputValue";
import InputLeft from "../../Components/InputLeft";
import Date from "../../Components/Date";
import Button from "../../Components/Button";
import { Container, AddView, AddText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import api from "../../Services/api";

export default function AddGanhos({ navigation }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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
        extraAmount: parseInt(extraAmount * 100),
        amount: parseInt(amount * 100),
        distance: parseInt(distance),
        duration: parseInt(duration),
        vendor: {
          name: name,
        },
        date: date,
      });
      showMessage({
        message: "Cadastro do ganho efetuado com sucesso!",
        type: "success",
        icon: "success",
        duration: 4000,
      });
      navigation.navigate("Inicio");
    } catch (error) {
      showMessage({
        message: "Não foi possível cadastrar o ganho!",
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
        <ScrollView>
          <Dropdown
            label="Plataforma"
            data={vendors}
            marginTop={screenHeight * 0.025}
            option="Selecione..."
            setOption={setName}
          />
          <Date
            label="Data"
            marginTop={screenHeight * 0.025}
            marginLeft={0}
            initialText="Selecione..."
            setSelectedDate={setDate}
          />
          <InputValue
            title="Valor total"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
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
            <InputValue
              title="Total de gorjeta"
              marginLeft={0}
              marginTop={screenHeight * 0.025}
              value={extraAmount}
              onChangeText={(text) => setExtraAmount(text)}
              keyboardType="numeric"
            />
          )}
          <InputLeft
            title="Distância percorrida"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={distance}
            onChangeText={(text) => setDistance(text)}
            placeholder="km"
            keyboardType="numeric"
          />
          <InputLeft
            title="Duração total"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={duration}
            onChangeText={(text) => setDuration(text)}
            placeholder="min"
            keyboardType="numeric"
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
            background={colors.modalIcons}
            size={16}
            textColor="white"
          />
        </ScrollView>
      </Container>
    </SafeArea>
  );
}
