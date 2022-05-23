import React, { useState, useEffect } from "react";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  AddContainer,
  AddText,
  FlatList,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import AddItemModal from "../../Components/AddItemModal";
import api from "../../Services/api";

export default function Vehicles({ navigation, route }) {
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
  } = route.params;
  const [checkboxes, setCheckboxes] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  async function vehiclesGet() {
    try {
      response = await api.get("/vehicles");
      console.log(response.data);
      setCheckboxes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function nextScreen() {
    if (!vehicles) {
      showMessage({
        message: "Falta preencher a lista de veículos!",
        type: "danger",
        icon: "danger",
      });
    } else {
      navigation.navigate("Plataformas", {
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
      });
    }
  }

  useEffect(() => {
    vehiclesGet();
  }, []);

  const Item = ({ item }) => <Checkbox marginTop={30} label={item.name} />;

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text title={true}>Veículos de Trabalho</Text>
          <Text>
            Você pode editar essas informações{"\n"}a qualquer momento.
          </Text>
        </TitleContainer>

        <FlatList
          data={checkboxes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <AddItemModal
          label="Adicionar novo veículo"
          initialList={vehicles}
          setInitialList={setVehicles}
          checkboxes={checkboxes}
          setCheckboxes={setCheckboxes}
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
}
