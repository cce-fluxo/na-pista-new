import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import SafeArea from "../../../Utils/SafeArea/index";
import Header from "../../../Components/SettingsHeader/index";
import Checkbox from "../../../Components/Checkbox/index";
import AddItemModal from "../../../Components/AddItemModal/index";
import IncrementContainer from "../../../Components/IncrementContainer";
import {
  Container,
  MiniView,
  MaxView,
  TitleText,
  LineView,
  NormalText,
} from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../Constants/constants";
import api from "../../../Services/api";

export default function Settings({ navigation }) {
  const [click, setClick] = useState(false);
  const [dataCategories, setDataCategories] = useState([
    {
      id: "1",
      name: "Aluguel do veículo",
    },
    {
      id: "2",
      name: "Alimentação",
    },
    {
      id: "3",
      name: "Manutenção",
    },
    {
      id: "4",
      name: "Multa",
    },
    {
      id: "5",
      name: "Contribuição mensal do MEI (DAS)",
    },
    {
      id: "6",
      name: "Troca de óleo",
    },
    {
      id: "7",
      name: "Combustível",
    },
  ]);
  const [dataVendors, setDataVendors] = useState([]);
  const [dataVehicles, setDataVehicles] = useState([]);
  const [userCategories, setUserCategories] = useState([]);
  const [userVendors, setUserVendors] = useState([]);
  const [userVehicles, setUserVehicles] = useState([]);

  async function getInfo() {
    try{
      const response = await api.get("/me");
      console.log(response.data);
      setUserVendors(response.data.vendors);
      setUserVehicles(response.data.vehicles);
    } catch(error) {
      console.log(error);
    }
  }
  
  async function updateInfo() {
    try {
      const response = await api.patch("/me", {
        vendors: userVendors,
        vehicles: userVehicles,
      });
      console.log(response);
      navigation.navigate("Menu Configurações");
    } catch (error) {
      console.log(error);
    }
  }

  async function vendorsGet() {
    try {
      const response = await api.get("/vendors");
      console.log(response.data);
      setDataVendors(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function vehiclesGet() {
    try {
      const response = await api.get("/vehicles");
      console.log(response.data);
      setDataVehicles(response.data);
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

  async function vehiclesPost(vehicle) {
    try {
       const response = await api.post("/vehicles", { name: vehicle });
       console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInfo();
    vendorsGet();
    vehiclesGet();
  }, []);

  return (
    <SafeArea>
      <Container>
        <Header
          name="Configurações"
          onPressNavigate={updateInfo}
        />

        {!click ? (
          <ScrollView>
            <MiniView
              height={screenHeight * 0.0875}
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <TitleText
                marginLeft={screenWidth * 0.05}
                fontFamily={fonts.Ubuntu}
              >
                Metas
              </TitleText>
              <TouchableOpacity
                style={{ marginRight: screenWidth * 0.1 }}
                onPress={() => setClick(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
            <MiniView
              height={screenHeight * 0.0875}
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <TitleText
                marginLeft={screenWidth * 0.05}
                fontFamily={fonts.Ubuntu}
              >
                Categorias de gastos
              </TitleText>
              <TouchableOpacity
                style={{ marginRight: screenWidth * 0.1 }}
                onPress={() => setClick(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
            <MiniView
              height={screenHeight * 0.0875}
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <TitleText
                marginLeft={screenWidth * 0.05}
                fontFamily={fonts.Ubuntu}
              >
                Plataformas
              </TitleText>
              <TouchableOpacity
                style={{ marginRight: screenWidth * 0.1 }}
                onPress={() => setClick(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
            <MiniView
              height={screenHeight * 0.0875}
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <TitleText
                marginLeft={screenWidth * 0.05}
                fontFamily={fonts.Ubuntu}
              >
                Veículos de trabalho
              </TitleText>
              <TouchableOpacity
                style={{ marginRight: screenWidth * 0.1 }}
                onPress={() => setClick(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
          </ScrollView>
        ) : (
          <ScrollView>
            <MaxView
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <MiniView
                height={screenHeight * 0.0875}
                width={screenWidth * 0.91}
                marginTop={0}
              >
                <TitleText
                  marginLeft={screenWidth * 0.05}
                  fontFamily={fonts.Ubuntu}
                >
                  Metas
                </TitleText>
                <TouchableOpacity
                  style={{ marginRight: screenWidth * 0.1 }}
                  onPress={() => setClick(false)}
                >
                  <AntDesign name="up" size={22} color={colors.background} />
                </TouchableOpacity>
              </MiniView>
              <LineView width={screenWidth * 0.82}></LineView>
              <NormalText
                width={screenWidth * 0.82}
                fontFamily={fonts.Ubuntu}
                marginTop={screenHeight * 0.025}
              >
                Definindo suas metas de ganhos te ajudaremos a acompanhar se
                está alcançando elas.
              </NormalText>
              <IncrementContainer
                title="Diária"
                marginLeft={0}
                marginTop={screenHeight * 0.025}
                color="white"
              />
              <IncrementContainer
                title="Semanal"
                marginLeft={0}
                marginTop={screenHeight * 0.025}
                color="white"
              />
              <IncrementContainer
                title="Mensal"
                marginLeft={0}
                marginTop={screenHeight * 0.025}
                color="white"
              />
              <View style={{ height: screenHeight * 0.025 }}></View>
            </MaxView>
            <MaxView
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <MiniView
                height={screenHeight * 0.0875}
                width={screenWidth * 0.91}
                marginTop={0}
              >
                <TitleText
                  marginLeft={screenWidth * 0.05}
                  fontFamily={fonts.Ubuntu}
                >
                  Categorias de gastos
                </TitleText>
                <TouchableOpacity
                  style={{ marginRight: screenWidth * 0.1 }}
                  onPress={() => setClick(false)}
                >
                  <AntDesign name="up" size={22} color={colors.background} />
                </TouchableOpacity>
              </MiniView>
              <LineView width={screenWidth * 0.82}></LineView>
              <NormalText
                width={screenWidth * 0.82}
                fontFamily={fonts.Ubuntu}
                marginTop={screenHeight * 0.025}
              >
                Selecione quais tipos de gastos você costuma ter ou crie novos.
              </NormalText>
              {dataCategories.map((item, index) => (
                <Checkbox
                  key={index}
                  marginTop={screenHeight * 0.025}
                  object={item}
                  newList={userCategories}
                  setNewList={setUserCategories}
                />
              ))}
              <View style={{ height: screenHeight * 0.025 }}></View>
              <AddItemModal label="Categoria de gasto" />
              <View style={{ height: screenHeight * 0.025 }}></View>
            </MaxView>
            <MaxView
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <MiniView
                height={screenHeight * 0.0875}
                width={screenWidth * 0.91}
                marginTop={0}
              >
                <TitleText
                  marginLeft={screenWidth * 0.05}
                  fontFamily={fonts.Ubuntu}
                >
                  Plataformas
                </TitleText>
                <TouchableOpacity
                  style={{ marginRight: screenWidth * 0.1 }}
                  onPress={() => setClick(false)}
                >
                  <AntDesign name="up" size={22} color={colors.background} />
                </TouchableOpacity>
              </MiniView>
              <LineView width={screenWidth * 0.82}></LineView>
              <NormalText
                width={screenWidth * 0.82}
                fontFamily={fonts.Ubuntu}
                marginTop={screenHeight * 0.025}
              >
                Identificando pra quais apps você trabalha poderemos filtrar as
                informações e mostrar, por exemplo, qual está te pagando melhor.
              </NormalText>
              {dataVendors.map((item, index) => (
                <Checkbox
                  key={index}
                  marginTop={screenHeight * 0.025}
                  object={item}
                  newList={userVendors}
                  setNewList={setUserVendors}
                />
              ))}
              <View style={{ height: screenHeight * 0.025 }}></View>
              <AddItemModal label="Plataforma" postRequest={vendorsPost} />
              <View style={{ height: screenHeight * 0.025 }}></View>
            </MaxView>
            <MaxView
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <MiniView
                height={screenHeight * 0.0875}
                width={screenWidth * 0.91}
                marginTop={0}
              >
                <TitleText
                  marginLeft={screenWidth * 0.05}
                  fontFamily={fonts.Ubuntu}
                >
                  Veículos de trabalho
                </TitleText>
                <TouchableOpacity
                  style={{ marginRight: screenWidth * 0.1 }}
                  onPress={() => setClick(false)}
                >
                  <AntDesign name="up" size={22} color={colors.background} />
                </TouchableOpacity>
              </MiniView>
              <LineView width={screenWidth * 0.82}></LineView>
              <View style={{ height: screenHeight * 0.025 }}></View>
              {dataVehicles.map((item, index) => (
                <Checkbox
                  key={index}
                  marginTop={screenHeight * 0.025}
                  object={item}
                  newList={userVehicles}
                  setNewList={setUserVehicles}
                />
              ))}
              <View style={{ height: screenHeight * 0.025 }}></View>
              <AddItemModal label="Veículo" postRequest={vehiclesPost} />
              <View style={{ height: screenHeight * 0.025 }}></View>
            </MaxView>
            <View style={{ height: screenHeight * 0.025 }}></View>
          </ScrollView>
        )}
      </Container>
    </SafeArea>
  );
}
