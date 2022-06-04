import React, { useState, useEffect } from "react";
import { Container, Text, Scroll, LineView } from "./styles";

import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";
import { Ionicons, AntDesign } from "react-native-vector-icons";

import iFood from "../../Assets/ifood.png";
import uber from "../../Assets/uber.png";
import rappi from "../../Assets/rappi.png";
import loggi from "../../Assets/loggi.png";
import alimentacao from "../../Assets/alimentacao.png"
import manutencao from "../../Assets/manutencao.png"



import SafeArea from "../../Utils/SafeArea";
import HomeHeader from "../../Components/HomeHeader";
import ActivityOptions from "../../Components/ActivityOptions";
import AddEarningModal from "../../Components/AddEarningModal";
import ActivityTransactions from "../../Components/ActivityTransactions";

export default function Activities({ navigation }) {
  return (
    <SafeArea>
      <Container>
        <HomeHeader
          onPressNavigate={() => navigation.navigate("Menu Configurações")}
          text={"Atividades"}
          height={screenHeight * 0.0811}
        />

        <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
          <ActivityOptions text={"Todas"} />
          <ActivityOptions text={"iFood"} source={iFood} />
          <ActivityOptions text={"Rappi"} source={rappi} />
          <ActivityOptions text={"Uber"} source={uber} />
          <ActivityOptions text={"Loggi"} source={loggi} />
        </Scroll>

        <Text
          marginLeft={screenWidth * 0.033}
          color={colors.inputTitle}
          marginTop={screenWidth * 0.211}
        >
          Hoje, 11 de Agosto
        </Text>
        <ActivityTransactions
          plataforma={"iFood"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$7,40"}
          horario={"12:30"}
          source={iFood}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"iFood"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$6,00"}
          horario={"11:22"}
          source={iFood}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"Uber"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$5,50"}
          horario={"07:33"}
          source={uber}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"Troca do Óleo"}
          categoria={"Manutenção"}
          color={colors.negative}
          preco={"-R$130,00"}
          horario={"07:20"}
          source={manutencao}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"Café da manhã"}
          categoria={"Alimentação"}
          color={colors.negative}
          preco={"-R$8,00"}
          horario={"07:20"}
          source={alimentacao}
        />
        <Text
          marginLeft={screenWidth * 0.033}
          color={colors.inputTitle}
          marginTop={screenWidth * 0.088}
        >
          Domingo, 8 de Agosto
        </Text>
        <ActivityTransactions
          plataforma={"Uber"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$4,50"}
          horario={"22:33"}
          source={uber}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"iFood"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$6,20"}
          horario={"21:10"}
          source={iFood}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"Rappi"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$3,50"}
          horario={"20:50"}
          source={rappi}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"Janta"}
          categoria={"Alimentação"}
          color={colors.negative}
          preco={"-R$15,50"}
          horario={"20:20"}
          source={alimentacao}
        />
        <LineView />
        <ActivityTransactions
          plataforma={"Rappi"}
          categoria={"Corrida"}
          color={colors.positive}
          preco={"+R$3,60"}
          horario={"18:13"}
          source={rappi}
        />
        <LineView />
      </Container>
      <AddEarningModal />
    </SafeArea>
  );
}
