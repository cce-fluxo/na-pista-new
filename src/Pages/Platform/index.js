import React, { useState } from "react";

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

export default function Platform({ navigation, route }) {
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
  } = route.params;

  async function vendorsGet() {
    try {
      response = await api.get("/vendors");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  function nextScreen() {
    if (!vendors) {
      showMessage({
        message: "Falta preencher a lista de veículos!",
        type: "danger",
        icon: "danger",
      });
    } else {
      navigation.navigate("Metas de Ganho", {
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
        vendors
      });
    }
  }

  const [initialList, setInitialList] = useState(vendorsGet);

  const [checkboxes, setCheckboxes] = useState(initialList);

  const Item = ({ item }) => <Checkbox marginTop={30} label={item.title} />;

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text title={true}>Plataformas</Text>
          <Text>
            Identificando para quais apps você trabalha,{"\n"}poderemos filtrar
            as informações e mostrar, {"\n"}por exemplo, qual está pagando
            melhor.
          </Text>
        </TitleContainer>
        <FlatList
          data={checkboxes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <AddItemModal
          label="Adicionar nova plataforma"
          initialList={initialList}
          setInitialList={setInitialList}
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
