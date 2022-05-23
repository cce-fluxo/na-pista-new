import React, { useState } from "react";

import SafeArea from "../../Utils/SafeArea/index";
import Header from "../../Components/SettingsHeader/index";
import Button from "../../Components/Button/index";
import Dropdown from "../../Components/Dropdown/index";
import Date from "../../Components/Date/index";
import Input from "../../Components/Input/index";
import {
  Container,
  InputContainer,
  InputText,
  MaxContainer,
  Title
} from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import api from "../../Services/api";

export default function AddGastos({ navigation }) {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const data = [
    {
      id: "1",
      value: "Combustível",
      label: "Combustível",
    },
    {
      id: "2",
      value: "Aluguel",
      label: "Aluguel",
    },
    {
      id: "3",
      value: "Alimentação",
      label: "Alimentação",
    },
    {
      id: "4",
      value: "Manutenção",
      label: "Manutenção",
    },
    {
      id: "5",
      value: "Multa",
      label: "Multa",
    },
    {
      id: "6",
      value: "Outro",
      label: "Outro",
    },
  ];

  async function addGasto() {
    setLoading(true);
    try {
      console.log(help);
      navigation.navigate("Menu Configurações");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <SafeArea>
      <Container>
        <Header name="Adicionar gasto" onPressNavigate={null} />
        <Date marginTop={30} marginLeft={0} label="Data" />
        <Dropdown label="Tipo" data={data} marginTop={30} setOption={setType} />
        <Input
          title="Valor"
          marginLeft={0}
          marginTop={30}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          placeholder="R$"
        />
        <MaxContainer
          width={screenWidth * 0.9}
          marginTop={60}
          marginLeft={0}
        >
          <Title
            color={colors.inputTitle}
            font={fonts.Ubuntu}
          >Notas (opcional)</Title>
          <InputContainer
            marginTop={0}
            height={screenHeight * 0.2}
            width={screenWidth * 0.91}
          >
            <InputText
              placeholder="Adicione mais detalhes..."
              onChangeText={(text) => setNotes(text)}
              value={notes}
              multiline={true}
            />
          </InputContainer>
        </MaxContainer>
        <Button
          width={screenWidth * 0.91}
          marginLeft={0}
          marginTop={screenHeight * 0.275}
          disabled={loading}
          loading={loading}
          text="Salvar"
          onPress={addGasto}
          color="black"
          background={colors.background}
          border={4}
          size={16}
        />
      </Container>
    </SafeArea>
  );
}
