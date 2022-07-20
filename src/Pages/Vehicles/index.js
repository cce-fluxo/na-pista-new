import React, { useState, useEffect } from "react";

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import AddItemModal from "../../Components/AddItemModal";
import api from "../../Services/api";
import { ScrollView } from "react-native-gesture-handler";

export default function Vehicles({ navigation }) {
  const [dataVehicles, setDataVehicles] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  async function vehiclesGet() {
    try {
      const response = await api.get("/vehicles");
      setDataVehicles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function vehiclesPost(vehicle) {
    try {
      const response = await api.post("/vehicles", { name: vehicle });
    } catch (error) {
      console.log(error);
    }
  }

  function nextScreen() {
    try {
      const response = api.post("/me", {
        vehicles: vehicles,
      });
      navigation.navigate("Plataformas");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    vehiclesGet();
  }, []);

  const Item = ({ item }) => (
    <Checkbox
      marginTop={30}
      object={item}
      newList={vehicles}
      setNewList={setVehicles}
    />
  );

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text title={true}>Veículos de Trabalho</Text>
          <Text>
            Você pode editar essas informações{"\n"}a qualquer momento.
          </Text>
        </TitleContainer>
        <ScrollView>
          {dataVehicles.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ScrollView>
        <AddItemModal
          text="Adicionar novo veículo"
          postRequest={vehiclesPost}
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
