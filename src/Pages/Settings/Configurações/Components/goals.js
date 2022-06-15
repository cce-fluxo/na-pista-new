import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import IncrementContainer from "../../../../Components/IncrementContainer";
import {
  MiniView,
  MaxView,
  TitleText,
  LineView,
  NormalText,
} from "../styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../../Constants/constants";

export default function Goals({setClickMetas}) {
  return (
    <MaxView width={screenWidth * 0.91} marginTop={screenHeight * 0.025}>
      <MiniView
        height={screenHeight * 0.0875}
        width={screenWidth * 0.91}
        marginTop={0}
      >
        <TitleText marginLeft={screenWidth * 0.05} fontFamily={fonts.Ubuntu}>
          Metas
        </TitleText>
        <TouchableOpacity
          style={{ marginRight: screenWidth * 0.1 }}
          onPress={() => setClickMetas(false)}
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
        Definindo suas metas de ganhos te ajudaremos a acompanhar se está
        alcançando elas.
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
  );
}
