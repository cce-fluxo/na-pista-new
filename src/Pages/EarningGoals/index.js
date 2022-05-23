import React, { useState } from "react";
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
import { useAuth } from "../../Contexts/auth";

export default function EarningGoals({ navigation, route }) {
  const {
    email,
    password,
    firstName,
    lastName,
    gender,
    birthDate,
    state,
    city,
    neighborhood,
    vehicles,
    vendors,
  } = route.params;
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

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
      />
      <IncrementContainer
        title="Semanal"
        marginLeft={0}
        marginTop={30}
        color={colors.background}
      />
      <IncrementContainer
        title="Mensal"
        marginLeft={0}
        marginTop={30}
        color={colors.background}
      />
      <ButtonContainer>
        <Button
          width={"90%"}
          text="Próximo"
          marginTop={20}
          marginLeft={0}
          disabled={loading}
          loading={loading}
          background={"white"}
          size={18}
          onPress={() =>
            signUp(
              email,
              password,
              firstName,
              lastName,
              gender,
              birthDate,
              state,
              city,
              neighborhood,
              vehicles,
              vendors,
              setLoading,
              navigation
            )
          }
        />
        <Button
          width={"80%"}
          text="Definir depois"
          marginTop={10}
          marginLeft={0}
          background={"#FFBF00"}
          size={16}
          onPress={() => navigation.navigate("First")}
          color={"rgba(0, 0, 0, 0.6)"}
        />
      </ButtonContainer>
    </Container>
  );
}
