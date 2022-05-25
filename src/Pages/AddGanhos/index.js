import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import SafeArea from "../../Utils/SafeArea/index";
import Header from "../../Components/SettingsHeader/index";
import Input from "../../Components/Input/index";
import Date from "../../Components/Date/index";
import Button from "../../Components/Button/index";
import { Container, TitleContainer, Title, AddView, AddText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";

export default function AddGanhos({ navigation }) {
  const [doneAt, setDoneAt] = useState("");
  const [amount, setAmount] = useState(0);
  const [extraAmount, setExtraAmount] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  async function addEarning() {
    setLoading(true);
    try {
      navigation.navigate("Menu Configurações");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <SafeArea>
      <Container>
        <Header
          name="Adicionar ganho"
          onPressNavigate={() => navigation.navigate("First")}
        />
        <TitleContainer
          width={screenWidth * 0.9}
          marginTop={screenHeight * 0.025}
          marginLeft={0}
        >
          <Title color={colors.inputTitle} font={fonts.Ubuntu}>
            Plataforma
          </Title>
        </TitleContainer>
        <ScrollView></ScrollView>
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
              <AntDesign name="plus" size={24} color={colors.background} />
              <View style={{width: 10}} />
              <AddText
                color={colors.background}
                font={fonts.Ubuntu}
              >Adicionar gorjeta</AddText>
            </TouchableOpacity>
          </AddView>
        ) : (
          <Input
            title="Total de gorjeta"
            marginLeft={0}
            marginTop={screenHeight * 0.025}
            value={extraAmount}
            onChangeText={(text) => setExtraAmount(text)}
            placeholder={extraAmount}
          />
        )}
        <Input
          title="Distância percorrida"
          marginLeft={0}
          marginTop={screenHeight * 0.025}
          value={distance}
          onChangeText={(text) => setDistance(text)}
          placeholder={distance}
        />
        <Input
          title="Duração total"
          marginLeft={0}
          marginTop={screenHeight * 0.025}
          value={duration}
          onChangeText={(text) => setDuration(text)}
          placeholder={duration}
        />
        <Button
          width={screenWidth * 0.91}
          marginLeft={0}
          marginTop={screenHeight * 0.025}
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
