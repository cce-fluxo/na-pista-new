import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import GoalsView from "./Components/goals";
import CategoriesView from "./Components/categories";
import VendorsView from "./Components/vendors";
import VehiclesView from "./Components/vehicles";
import SafeArea from "../../../Utils/SafeArea/index";
import Header from "../../../Components/SettingsHeader/index";
import {
  Container,
  MiniView,
  TitleText,
} from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../Constants/constants";
import api from "../../../Services/api";

export default function Settings({ navigation }) {
  const [clickMetas, setClickMetas] = useState(false);
  const [clickCategorias, setClickCategorias] = useState(false);
  const [clickPlataformas, setClickPlataformas] = useState(false);
  const [clickVeiculos, setClickVeiculos] = useState(false);

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
    try {
      const response = await api.get("/me");
      setUserVendors(response.data.vendors);
      setUserVehicles(response.data.vehicles);
    } catch (error) {
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
      setDataVendors(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function vehiclesGet() {
    try {
      const response = await api.get("/vehicles");
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
        <Header name="Configurações" onPressNavigate={updateInfo} />
        <ScrollView>
          {!clickMetas ? (
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
                onPress={() => setClickMetas(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
          ) : (
            <GoalsView setClickMetas={setClickMetas} />
          )}
          {!clickCategorias ? (
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
                onPress={() => setClickCategorias(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
          ) : (
            <CategoriesView
              setClickCategorias={setClickCategorias}
              dataCategories={dataCategories}
              userCategories={userCategories}
              setUserCategories={setUserCategories}
            />
          )}
          {!clickPlataformas ? (
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
                onPress={() => setClickPlataformas(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
          ) : (
            <VendorsView
              setClickPlataformas={setClickPlataformas}
              dataVendors={dataVendors}
              userVendors={userVendors}
              setUserVendors={setUserVendors}
              vendorsPost={vendorsPost}
            />
          )}
          {!clickVeiculos ? (
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
                onPress={() => setClickVeiculos(true)}
              >
                <AntDesign name="down" size={22} color={colors.background} />
              </TouchableOpacity>
            </MiniView>
          ) : (
            <VehiclesView
              setClickVeiculos={setClickVeiculos}
              dataVehicles={dataVehicles}
              userVehicles={userVehicles}
              setUserVehicles={setUserVehicles}
              vehiclesPost={vehiclesPost}
            />
          )}
          <View style={{ height: screenHeight * 0.025 }}></View>
        </ScrollView>
      </Container>
    </SafeArea>
  );
}
