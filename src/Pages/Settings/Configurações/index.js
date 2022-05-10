import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import SafeArea from "../../../Utils/SafeArea/index";
import Header from "../../../Components/SettingsHeader/index";
import Checkbox from "../../../Components/Checkbox/index";
import AddItemModal from "../../../Components/AddItemModal/index";
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

export default function Settings({ navigation }) {
  const [click, setClick] = useState(false);
  const [diaria, setDiaria] = useState(80);
  const [semanal, setSemanal] = useState(500);
  const [mensal, setMensal] = useState(2000);

  const [dataCategorias, setDataCategorias] = useState([
    {
      id: "1",
      label: "Aluguel do veículo",
    },
    {
      id: "2",
      label: "Alimentação",
    },
    {
      id: "3",
      label: "Manutenção",
    },
    {
      id: "4",
      label: "Multa",
    },
    {
      id: "5",
      label: "Contribuição mensal do MEI (DAS)",
    },
    {
      id: "6",
      label: "Troca de óleo",
    },
    {
      id: "7",
      label: "Combustível",
    },
  ]);

  const [dataPlataformas, setDataPlataformas] = useState([
    {
      id: "1",
      label: "Ifood",
    },
    {
      id: "2",
      label: "Rappi",
    },
    {
      id: "3",
      label: "Uber eats",
    },
    {
      id: "4",
      label: "Loggi",
    },
    {
      id: "5",
      label: "Zé Delivery",
    },
    {
      id: "6",
      label: "99 Food",
    },
    {
      id: "7",
      label: "James",
    },
  ]);

  const [dataVeiculos, setDataVeiculos] = useState([
    {
      id: "1",
      label: "A pé",
    },
    {
      id: "2",
      label: "Bicicleta",
    },
    {
      id: "3",
      label: "Bicicleta Elétrica",
    },
    {
      id: "4",
      label: "Bicicleta Motorizada",
    },
    {
      id: "5",
      label: "Moto",
    },
    {
      id: "6",
      label: "Carro",
    },
    {
      id: "7",
      label: "Patinete",
    },
  ]);

  const [checkboxesCategorias, setCheckboxesCategorias] =
    useState(dataCategorias);
  const [checkboxesPlataformas, setCheckboxesPlataformas] =
    useState(dataPlataformas);
  const [checkboxesVeiculos, setCheckboxesVeiculos] = useState(dataVeiculos);

  return (
    <SafeArea>
      <Container>
        <Header
          name="Configurações"
          onPressNavigate={() => navigation.navigate("Menu Configurações")}
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
            <MiniView
              height={screenHeight * 0.0875}
              width={screenWidth * 0.91}
              marginTop={screenHeight * 0.025}
            >
              <TitleText
                marginLeft={screenWidth * 0.05}
                fontFamily={fonts.Ubuntu}
              >
                Conexões
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
              {checkboxesCategorias.map((item, index) => (
                <Checkbox
                  key={index}
                  marginTop={screenHeight * 0.025}
                  label={item.label}
                />
              ))}
              <View style={{ height: screenHeight * 0.025 }}></View>
              <AddItemModal
                label="Categoria de gasto"
                initialList={dataCategorias}
                setInitialList={setDataCategorias}
                checkboxes={checkboxesCategorias}
                setCheckboxes={setCheckboxesCategorias}
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
              {checkboxesPlataformas.map((item, index) => (
                <Checkbox
                  key={index}
                  marginTop={screenHeight * 0.025}
                  label={item.label}
                />
              ))}
              <View style={{ height: screenHeight * 0.025 }}></View>
              <AddItemModal
                label="Plataforma"
                initialList={dataPlataformas}
                setInitialList={setDataPlataformas}
                checkboxes={checkboxesPlataformas}
                setCheckboxes={setCheckboxesPlataformas}
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
              {checkboxesVeiculos.map((item, index) => (
                <Checkbox
                  key={index}
                  marginTop={screenHeight * 0.025}
                  label={item.label}
                />
              ))}
              <View style={{ height: screenHeight * 0.025 }}></View>
              <AddItemModal
                label="Veículo	"
                initialList={dataVeiculos}
                setInitialList={setDataVeiculos}
                checkboxes={checkboxesVeiculos}
                setCheckboxes={setCheckboxesVeiculos}
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
                  Conexões
                </TitleText>
                <TouchableOpacity
                  style={{ marginRight: screenWidth * 0.1 }}
                  onPress={() => setClick(false)}
                >
                  <AntDesign name="up" size={22} color={colors.background} />
                </TouchableOpacity>
              </MiniView>
              <LineView width={screenWidth * 0.82}></LineView>
            </MaxView>
            <View style={{ height: screenHeight * 0.025 }}></View>
          </ScrollView>
        )}
      </Container>
    </SafeArea>
  );
}
