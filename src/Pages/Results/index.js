import React, { useState } from "react";
import { View } from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "react-native-vector-icons";

import SafeArea from "../../Utils/SafeArea";
import AddEarningModal from "../../Components/AddEarningModal";
import ActivityOptions from "../../Components/ActivityOptions";
import iFood from "../../Assets/ifood.png";
import uber from "../../Assets/uber.png";
import rappi from "../../Assets/rappi.png";
import loggi from "../../Assets/loggi.png";
import {
  Subcontainer,
  TitleText,
  TextContainer,
  IconContainer,
  MainContainer,
  PeriodView,
  PeriodOpacity,
  PeriodSubView,
  PeriodText,
  TimeView,
  Scroll,
  GGView,
  GGSubView,
  ResultText,
  LineView,
  ResultView,
  ResultSubView
} from "./styles";
import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";

export default function Results({ navigation }) {
  const dia = {
    data: "Hoje",
    ganhos: 59,
    gastos: 12,
    corridas: 32,
    tempoTotal: "8:15",
    tempoParado: "2:15",
    distanciaTotal: 209,
    distanciaCorrida: 1.34,
    ganhoHora: 4.2,
    ganhoKM: 3.9,
  };
  const semana = {
    data: "6 – 12 de setembro",
    ganhos: 200,
    gastos: 80,
    corridas: 101,
    tempoTotal: "41:15",
    tempoParado: "20:22",
    distanciaTotal: 209,
    distanciaCorrida: 1.79,
    ganhoHora: 4.2,
    ganhoKM: 3.9,
  };
  const mes = {
    data: "Setembro",
    ganhos: 400,
    gastos: 195,
    corridas: 140,
    tempoTotal: "126:95",
    tempoParado: "95:01",
    distanciaTotal: 424,
    distanciaCorrida: 1.72,
    ganhoHora: 4.53,
    ganhoKM: 3.87,
  };

  const [period, setPeriod] = useState("Dia");
  const [periodObject, setPeriodObject] = useState(dia);

  const changePeriod = (text) => {
    switch (text) {
      case "Dia":
        setPeriod("Dia");
        setPeriodObject(dia);
        break;
      case "Semana":
        setPeriod("Semana");
        setPeriodObject(semana);
        break;
      case "Mês":
        setPeriod("Mês");
        setPeriodObject(mes);
        break;
      default:
        setPeriod("Dia");
        setPeriodObject(dia);
    }
  };

  return (
    <SafeArea>
      <MainContainer showsVerticalScrollIndicator={false}>
        <Subcontainer
          backgroundColor={colors.background}
          width={screenWidth}
          height={screenHeight * 0.09}
        >
          <TextContainer
            padding={screenWidth * 0.027}
            justifyContent={"space-between"}
            marginTop={10}
            maxHeight={screenHeight * 0.1}
            maxWidth={screenWidth}
            marginLeft={0}
          >
            <TitleText
              fontFamily={fonts.Ubuntu}
              fontSize={screenWidth * 0.055}
              lineHeight={screenWidth * 0.083}
              color="black"
              marginLeft={screenWidth * 0.03}
              marginTop={0}
            >
              Resultados
            </TitleText>
            <IconContainer marginRight={-screenWidth * 0.25}>
              <AntDesign
                name="plus"
                size={screenWidth * 0.066}
                color={colors.icon}
              />
            </IconContainer>
            <IconContainer
              marginRight={screenWidth * 0.067}
              onPress={() => navigation.navigate("Menu Configurações")}
            >
              <Ionicons
                name="settings-sharp"
                size={screenWidth * 0.066}
                color={colors.icon}
              />
            </IconContainer>
          </TextContainer>
        </Subcontainer>
        <PeriodView
          width={screenWidth}
          height={screenHeight * 0.07}
          backgroundColor="#f8f8f8"
        >
          <PeriodOpacity onPress={() => changePeriod("Dia")}>
            <PeriodSubView
              width={screenWidth / 3}
              height={screenHeight * 0.07}
              borderBottom={
                period == "Dia" ? `${colors.background}` : "#f8f8f8"
              }
            >
              <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
                Dia
              </PeriodText>
            </PeriodSubView>
          </PeriodOpacity>
          <PeriodOpacity onPress={() => changePeriod("Semana")}>
            <PeriodSubView
              width={screenWidth / 3}
              height={screenHeight * 0.07}
              borderBottom={
                period == "Semana" ? `${colors.background}` : "#f8f8f8"
              }
            >
              <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
                Semana
              </PeriodText>
            </PeriodSubView>
          </PeriodOpacity>
          <PeriodOpacity onPress={() => changePeriod("Mês")}>
            <PeriodSubView
              width={screenWidth / 3}
              height={screenHeight * 0.07}
              borderBottom={
                period == "Mês" ? `${colors.background}` : "#f8f8f8"
              }
            >
              <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
                Mês
              </PeriodText>
            </PeriodSubView>
          </PeriodOpacity>
        </PeriodView>
        <TimeView width={screenWidth} height={screenHeight * 0.06}>
          <AntDesign
            name="left"
            size={screenWidth * 0.04}
            color={colors.icon}
          />
          <PeriodText fontFamily={fonts.Ubuntu} color={colors.icon}>
            {periodObject.data}
          </PeriodText>
          <AntDesign
            name="right"
            size={screenWidth * 0.04}
            color={colors.icon}
          />
        </TimeView>
        <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
          <ActivityOptions text={"Todas"} />
          <ActivityOptions text={"iFood"} source={iFood} />
          <ActivityOptions text={"Rappi"} source={rappi} />
          <ActivityOptions text={"Uber"} source={uber} />
          <ActivityOptions text={"Loggi"} source={loggi} />
        </Scroll>
        <GGView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <GGSubView width={screenWidth * 0.3} height={screenHeight * 0.125}>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              GANHOS
            </PeriodText>
            
            <ResultText fontFamily={fonts.Ubuntu} color="green">
              R$ {periodObject.ganhos}
            </ResultText>
          </GGSubView>
          <LineView
            height={screenHeight * 0.08}
            backgroundColor={colors.icon}
          ></LineView>
          <GGSubView width={screenWidth * 0.3} height={screenHeight * 0.125}>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              GASTOS
            </PeriodText>
            <ResultText fontFamily={fonts.Ubuntu} color="red">
              R$ {periodObject.gastos}
            </ResultText>
          </GGSubView>
        </GGView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <MaterialIcons name="pedal-bike" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              CORRIDAS
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            {periodObject.corridas}
          </ResultText>
        </ResultView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <AntDesign name="clockcircleo" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              TEMPO TOTAL
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            {periodObject.tempoTotal}
          </ResultText>
        </ResultView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <AntDesign name="clockcircleo" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              TEMPO PARADO
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            {periodObject.tempoParado}
          </ResultText>
        </ResultView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <AntDesign name="enviroment" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              DISTÂNCIA TOTAL
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            {periodObject.distanciaTotal} km
          </ResultText>
        </ResultView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <AntDesign name="enviroment" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              DISTÂNCIA / CORRIDA
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            {periodObject.distanciaCorrida} km
          </ResultText>
        </ResultView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <AntDesign name="clockcircleo" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              GANHO / HORA
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            R$ {periodObject.ganhoHora}
          </ResultText>
        </ResultView>
        <ResultView
          marginTop={10}
          marginLeft={screenWidth * 0.035}
          width={screenWidth * 0.93}
          height={screenHeight * 0.125}
        >
          <ResultSubView>
            <AntDesign name="clockcircleo" size={14} color={colors.inputTitle} />
            <View style={{ marginLeft: 5}}></View>
            <PeriodText fontFamily={fonts.Ubuntu} color={colors.inputTitle}>
              GANHO / KM
            </PeriodText>
          </ResultSubView>
          <ResultText fontFamily={fonts.Ubuntu} color="black">
            R$ {periodObject.ganhoKM}
          </ResultText>
        </ResultView>
        <View style={{ height: screenHeight * 0.1 }}></View>
      </MainContainer>
      <AddEarningModal navigation={navigation} />
    </SafeArea>
  );
}
