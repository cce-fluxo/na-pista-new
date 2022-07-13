import React, { useState } from "react";

import { Container, TitleContainer, Text, ButtonContainer } from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Dropdown from "../../Components/Dropdown";
import { dataState } from "../../Constants/constants";

const WhereYouLive = ({ navigation, route }) => {
  const { email, password, firstName, lastName, gender, birthDate } =
    route.params;
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  function nextScreen() {
    if (!state || !city || !neighborhood) {
      showMessage({
        message: "Falta preencher a sua residência!",
        type: "danger",
        icon: "danger",
      });
    } else {
      navigation.navigate("Veiculos", {
        email,
        password,
        firstName,
        lastName,
        gender,
        birthDate,
        state,
        city,
        neighborhood,
      });
    }
  }

  const dataCity = [
    {
      id: "1",
      name: "Rio de Janeiro",
    },
    {
      id: "2",
      name: "São Paulo",
    },
  ];

  const dataNeighborhood = [
    {
      id: "1",
      name: "Botafogo",
    },
    {
      id: "2",
      name: "Morumbi",
    },
    {
      id: "3",
      name: "Copacabana",
    },
    {
      id: "4",
      name: "Flamengo",
    },
  ];

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text title={true}>Onde você mora</Text>
          <Text>
            Queremos entender onde você trabalha para poder oferecer opções
            especiais dos{"\n"} entregadores da sua região.
          </Text>
        </TitleContainer>
        <Dropdown
          label="Estado"
          data={dataState}
          marginTop={30}
          option="Selecione..."
          setOption={setState}
        />
        <Dropdown
          label="Cidade"
          data={dataCity}
          marginTop={30}
          option="Selecione..."
          setOption={setCity}
        />
        <Dropdown
          label="Bairro"
          data={dataNeighborhood}
          marginTop={30}
          option="Selecione..."
          setOption={setNeighborhood}
        />
        <ButtonContainer>
          <Button
            width={"90%"}
            text="Próximo"
            marginTop={350}
            marginLeft={0}
            background={"white"}
            size={18}
            onPress={nextScreen}
          />
        </ButtonContainer>
      </Container>
    </SafeArea>
  );
};

export default WhereYouLive;
