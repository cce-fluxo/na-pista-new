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
import alimentacao from "../../Assets/alimentacao.png";
import manutencao from "../../Assets/manutencao.png";

import SafeArea from "../../Utils/SafeArea";
import HomeHeader from "../../Components/HomeHeader";
import ActivityOptions from "../../Components/ActivityOptions";
import AddEarningModal from "../../Components/AddEarningModal";
import ActivityTransactions from "../../Components/ActivityTransactions";

import api from "../../Services/api";

export default function Activities({ navigation }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    activitiesGet();
  }, []);

  async function activitiesGet() {
    try {
      response = await api.get("/activities");
      console.log(response.data);
      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getVendorIcon = (vendor) => {
    switch (vendor) {
      case "IFOOD":
        return iFood;
      case "RAPPI":
        return rappi;
      case "LOGGI":
        return loggi;
      case "UBER":
        return uber;
      default:
        return "";
    }
  };

  const switchCategory = (category) => {
    switch (category) {
      case "Combustível":
        return "FUEL";
      case "Aluguel":
        return "RENT";
      case "Alimentação":
        return "FOOD";
      case "Manutenção":
        return "MAINTENANCE";
      case "Multa":
        return "FINE";
      case "Outro":
        return "OTHER";
      default:
        return "";
    }
  };

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

        {Object.keys(activities).map((dates) => (
          <>
            <Text
              marginLeft={screenWidth * 0.033}
              color={colors.inputTitle}
              marginTop={screenWidth * 0.211}
            >
              {dates}
            </Text>
            {activities[dates].map((activity) => (
              <ActivityTransactions
                plataforma={activity.vendor.name}
                categoria={switchCategory(activity.category)}
                color={`${
                  type === "EXPENSE" ? colors.negative : colors.positive
                }`}
                preco={`${
                  type === "EXPENSE" ? "-" : "+"
                }${parseAmountToCurrency(amount / 100)}`}
                horario={activity.date}
                source={getVendorIcon(activity.vendor)}
              />
            ))}
          </>
        ))}
      </Container>
      <AddEarningModal navigation={navigation} />
    </SafeArea>
  );
}
