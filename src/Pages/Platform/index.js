import React, { useState, useEffect } from "react";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
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
  const [dataVendors, setDataVendors] = useState([]);
  const [vendors, setVendors] = useState([]);

  async function vendorsGet() {
    try {
      response = await api.get("/vendors");
      console.log(response.data);
      setDataVendors(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function vendorsPost(vendor) {
    try {
      const response = await api.post("/vendors", { name: vendor });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function nextScreen() {
    if (!vendors) {
      showMessage({
        message: "Falta preencher a lista de plataformas!",
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
        vendors,
      });
    }
  }

  useEffect(() => {
    vendorsGet();
  }, []);

  const Item = ({ item }) => <Checkbox marginTop={30} object={item} newList={vendors} setNewList={setVendors} />;

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
          data={dataVendors}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <AddItemModal
          text="Adicionar nova plataforma"
          postRequest={vendorsPost}
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
