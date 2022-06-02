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
  Title,
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
      name: "Combustível",
    },
    {
      id: "2",
      name: "Aluguel",
    },
    {
      id: "3",
      name: "Alimentação",
    },
    {
      id: "4",
      name: "Manutenção",
    },
    {
      id: "5",
      name: "Multa",
    },
    {
      id: "6",
      name: "Outro",
    },
  ];

  async function addGasto() {
    setLoading(true);
    try {
      console.log(date, type, amount, notes);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <SafeArea>
      <Container>
        <Header name="Adicionar gasto" onPressNavigate={() => navigation.navigate("Inicio")} />
        <Date marginTop={screenHeight * 0.02} marginLeft={0} label="Data" />
        <Dropdown
          label="Tipo"
          data={data}
          marginTop={screenHeight * 0.02}
          option="Selecione..."
          setOption={setType}
        />
        <Input
          title="Valor"
          marginLeft={0}
          marginTop={screenHeight * 0.02}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          placeholder="R$"
        />
        <MaxContainer
          width={screenWidth * 0.9}
          marginTop={screenHeight * 0.04}
          marginLeft={0}
        >
          <Title color={colors.inputTitle} font={fonts.Ubuntu}>
            Notas (opcional)
          </Title>
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
          width={screenWidth * 0.9}
          marginLeft={0}
          marginTop={0}
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
