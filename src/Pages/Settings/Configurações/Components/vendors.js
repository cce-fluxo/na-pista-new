import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import Checkbox from "../../../../Components/Checkbox/index";
import AddItemModal from "../../../../Components/AddItemModal/index";
import { MiniView, MaxView, TitleText, LineView, NormalText } from "../styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../../Constants/constants";

export default function Vendors({
  setClickPlataformas,
  dataVendors,
  userVendors,
  setUserVendors,
  vendorsPost
}) {
  return (
    <MaxView width={screenWidth * 0.91} marginTop={screenHeight * 0.025}>
      <MiniView
        height={screenHeight * 0.0875}
        width={screenWidth * 0.91}
        marginTop={0}
      >
        <TitleText marginLeft={screenWidth * 0.05} fontFamily={fonts.Ubuntu}>
          Plataformas
        </TitleText>
        <TouchableOpacity
          style={{ marginRight: screenWidth * 0.1 }}
          onPress={() => setClickPlataformas(false)}
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
  );
}
