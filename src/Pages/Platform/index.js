import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { Container, TitleContainer, Text, ButtonContainer } from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import AddItemModal from "../../Components/AddItemModal";
import api from "../../Services/api";

export default function Platform({ navigation }) {
  const [dataVendors, setDataVendors] = useState([]);
  const [vendors, setVendors] = useState([]);

  async function vendorsGet() {
    try {
      const response = await api.get("/vendors");
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

  async function nextScreen() {
    try {
      const response = api.post("/me", {
        vendors: vendors,
      });
      navigation.navigate("Metas de Ganho");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    vendorsGet();
  }, []);

  const Item = ({ item }) => (
    <Checkbox
      marginTop={30}
      object={item}
      newList={vendors}
      setNewList={setVendors}
    />
  );

  return (
    <SafeArea>
      <Container>
        <ScrollView>
          <TitleContainer>
            <Text title={true}>Plataformas</Text>
            <Text>
              Identificando para quais apps você trabalha,{"\n"}poderemos
              filtrar as informações e mostrar, {"\n"}por exemplo, qual está
              pagando melhor.
            </Text>
          </TitleContainer>
          {dataVendors.map((item, index) => (
            <Item key={index} item={item} />
          ))}
          <AddItemModal
            text="Adicionar nova plataforma"
            postRequest={vendorsPost}
          />
        </ScrollView>
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
