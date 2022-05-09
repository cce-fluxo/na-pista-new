import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import SafeArea from "../../../Utils/SafeArea/index";
import Header from "../../../Components/SettingsHeader/index";
import Input from "../../../Components/Input/index";
import Dropdown from "../../../Components/Dropdown/index";
import Date from "../../../Components/Date/index";
import Button from "../../../Components/Button/index";
import { Container, MiniView, MaxView, TitleText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../Constants/constants";

export default function Settings({ navigation }) {
  const [click, setClick] = useState(false);

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
            <MaxView></MaxView>
            <MaxView></MaxView>
            <MaxView></MaxView>
            <MaxView></MaxView>
            <MaxView></MaxView>
          </ScrollView>
        )}
      </Container>
    </SafeArea>
  );
}
