import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  Title,
} from "./styles";
import { colors } from "../../Constants/constants";
import Button from "../../Components/Button";
import IncrementContainer from "../../Components/IncrementContainer";
import api from "../../Services/api";

export default function EarningGoals({ navigation }) {
  const [dailyGoal, setDailyGoal] = useState(0);
  const [weeklyGoal, setWeeklyGoal] = useState(0);
  const [monthlyGoal, setMonthlyGoal] = useState(0);

  async function postGoals() {
    try {
    const response = await api.post("/goals/bulk", {
      bulk: [
        {
          type: "DAILY",
          amount: dailyGoal * 100
        },
        {
          type: "WEEKLY",
          amount: weeklyGoal * 100
        },
        {
          type: "MONTHLY",
          amount: monthlyGoal * 100
        }
      ]
    });
    showMessage({
      message: "Metas de Ganhos definidos com sucesso!",
      type: "success",
      icon: "success",
      duration: 4000,
    });
    console.log(response);
    navigation.navigate("Sucesso");
  } catch (error) {
    showMessage({
      message: "Não foi possível definir as Metas de Ganhos!",
      type: "danger",
      icon: "danger",
    });
    console.log(error);
  }
  }

  return (
    <Container>
      <TitleContainer>
        <Text title={true}>Metas de ganhos</Text>
        <Text>
          Definindo suas metas de ganhos te ajudaremos a acompanhar se está
          alcançando elas.
        </Text>
      </TitleContainer>
      <IncrementContainer
        title="Diária"
        marginLeft={0}
        marginTop={20}
        color={colors.background}
        quantity={dailyGoal}
        setQuantity={setDailyGoal}
        interval={5}
      />
      <IncrementContainer
        title="Semanal"
        marginLeft={0}
        marginTop={30}
        color={colors.background}
        quantity={weeklyGoal}
        setQuantity={setWeeklyGoal}
        interval={10}
      />
      <IncrementContainer
        title="Mensal"
        marginLeft={0}
        marginTop={30}
        color={colors.background}
        quantity={monthlyGoal}
        setQuantity={setMonthlyGoal}
        interval={25}
      />
      <ButtonContainer>
        <Button
          width={"90%"}
          text="Próximo"
          marginTop={20}
          marginLeft={0}
          background={"white"}
          size={18}
          onPress={postGoals}
        />
        <Button
          width={"80%"}
          text="Definir depois"
          marginTop={10}
          marginLeft={0}
          background={"#FFBF00"}
          size={16}
          onPress={() => navigation.navigate("Successo")}
          color={"rgba(0, 0, 0, 0.6)"}
        />
      </ButtonContainer>
    </Container>
  );
}
