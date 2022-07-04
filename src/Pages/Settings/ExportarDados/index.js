import React, { useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import SafeArea from "../../../Utils/SafeArea/index";
import Checkbox from "../../../Components/Checkbox/index";
import Button from "../../../Components/Button/index";
import { Container, OutsideView, ModalView, ExportText } from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../../Constants/constants";

export default function SettingsExportData({ navigation }) {
  const [exportData, setExportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function addExport() {
    setLoading(true);
    try {
      console.log(exportData);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  const data = [
    {
      id: "1",
      name: "Corridas e Ganhos",
    },
    {
      id: "2",
      name: "Gastos",
    },
    {
      id: "3",
      name: "Indicadores",
    },
    {
      id: "4",
      name: "Histórico",
    },
    {
      id: "5",
      name: "Trajetos",
    },
  ];

  return (
    <SafeArea>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <OutsideView>
          <ModalView height={screenHeight * 0.26} width={screenWidth * 0.911}>
            <ExportText
              marginTop={0}
              width={screenWidth * 0.78}
              color={colors.inputTitle}
              fontFamily={fonts.Ubuntu}
            >
              Feito! Vamos processar teu pedido e te enviaremos por email teus
              dados assim que estiver pronto.
            </ExportText>
            <Button
              width={screenWidth * 0.78}
              marginLeft={0}
              marginTop={screenHeight * 0.033}
              disabled={loading}
              loading={loading}
              text="Beleza"
              onPress={() => navigation.navigate("Menu Configurações")}
              color="black"
              background={colors.background}
              border={4}
              size={16}
            />
          </ModalView>
        </OutsideView>
      </Modal>
      <Container>
        <Header
          name="Exportas Dados"
          onPressNavigate={() => navigation.navigate("Menu Configurações")}
        />
        <ExportText
          marginTop={screenHeight * 0.022}
          width={screenWidth * 0.91}
          color={colors.inputTitle}
          fontFamily={fonts.Ubuntu}
        >
          Os dados que você compartilhar conosco são SEUS, e acreditamos que
          você deve ter acesso a eles quando e como quiser.
        </ExportText>
        <ExportText
          marginTop={screenHeight * 0.022}
          width={screenWidth * 0.91}
          color={colors.inputTitle}
          fontFamily={fonts.Ubuntu}
        >
          Selecione abaixo quais dados você gostaria de exportar.
        </ExportText>
        {data.map((item, index) => (
          <Checkbox
            key={index}
            marginTop={screenHeight * 0.033}
            object={item}
            newList={exportData}
            setNewList={setExportData}
          />
        ))}
        <Button
          width={screenWidth * 0.91}
          marginLeft={0}
          marginTop={screenHeight * 0.3}
          disabled={loading}
          loading={loading}
          text="Enviar"
          onPress={addExport}
          color="black"
          background={colors.background}
          border={4}
          size={16}
        />
      </Container>
    </SafeArea>
  );
}
