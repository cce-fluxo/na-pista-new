import React, { useState } from "react";
import { Ionicons, AntDesign } from "react-native-vector-icons";

import SafeArea from "../../Utils/SafeArea";
import AddEarningModal from "../../Components/AddEarningModal";
import {
  Subcontainer,
  TitleText,
  TextContainer,
  IconContainer,
  MainContainer,
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
          height={screenHeight * 0.32}
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
        <PeriodView>
          <PeriodOpacity></PeriodOpacity>
          <PeriodOpacity></PeriodOpacity>
          <PeriodOpacity></PeriodOpacity>
        </PeriodView>
        <TimeView>
          <AntDesign
            name="left"
            size={screenWidth * 0.04}
            color={colors.icon}
          />
          <TimeText>{periodObject.data}</TimeText>
          <AntDesign
            name="right"
            size={screenWidth * 0.04}
            color={colors.icon}
          />
        </TimeView>
        <ScrollView></ScrollView>
        <GGView>
          <GGSubView></GGSubView>
          <LineView></LineView>
          <GGSubView></GGSubView>
        </GGView>
        <ResultView>
          <ResultText>{periodObject.corridas}</ResultText>
        </ResultView>
        <ResultView>
          <ResultText>{periodObject.tempoTotal}</ResultText>
        </ResultView>
        <ResultView>
          <ResultText>{periodObject.tempoParado}</ResultText>
        </ResultView>
        <ResultView>
          <ResultText>{periodObject.distanciaTotal} km</ResultText>
        </ResultView>
        <ResultView>
          <ResultText>{periodObject.distanciaCorrida} km</ResultText>
        </ResultView>
        <ResultView>
          <ResultText>R$ {periodObject.ganhoHora}</ResultText>
        </ResultView>
        <ResultView>
          <ResultText>R$ {periodObject.ganhoKM}</ResultText>
        </ResultView>
      </MainContainer>
      <AddEarningModal />
    </SafeArea>
  );
}
