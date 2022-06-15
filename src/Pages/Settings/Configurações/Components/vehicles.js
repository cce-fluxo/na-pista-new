import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import Checkbox from "../../../../Components/Checkbox/index";
import AddItemModal from "../../../../Components/AddItemModal/index";
import { MiniView, MaxView, TitleText, LineView } from "../styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../../Constants/constants";

export default function Vehicles({
  setClickVeiculos,
  dataVehicles,
  userVehicles,
  setUserVehicles,
  vehiclesPost
}) {
  return (
    <MaxView width={screenWidth * 0.91} marginTop={screenHeight * 0.025}>
      <MiniView
        height={screenHeight * 0.0875}
        width={screenWidth * 0.91}
        marginTop={0}
      >
        <TitleText marginLeft={screenWidth * 0.05} fontFamily={fonts.Ubuntu}>
          Veículos de trabalho
        </TitleText>
        <TouchableOpacity
          style={{ marginRight: screenWidth * 0.1 }}
          onPress={() => setClickVeiculos(false)}
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
  );
}
