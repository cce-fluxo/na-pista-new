import React, { useState } from "react";
import {KeyboardAvoidingView} from "react-native";
import { showMessage } from "react-native-flash-message";

import SafeArea from "../../Utils/SafeArea/index";
import Header from "../../Components/SettingsHeader/index";
import Button from "../../Components/Button/index";
import Dropdown from "../../Components/Dropdown/index";
import Date from "../../Components/Date/index";
import InputValue from "../../Components/InputValue/index";
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
  const [category, setCategory] = useState("");
  const [auxCategory, setAuxCategory] = useState("");
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

  async function addExpense() {
    setLoading(true);
    try {
      switch (category) {
        case "Combustível":
          setAuxCategory("FUEL");
          break;
        case "Aluguel":
          setAuxCategory("RENT");
          break;
        case "Alimentação":
          setAuxCategory("FOOD");
          break;
        case "Manutenção":
          setAuxCategory("MAINTENANCE");
          break;
        case "Multa":
          setAuxCategory("FINE");
          break;
        case "Outro":
          setAuxCategory("OTHER");
          break;
        default:
          setAuxCategory("");
      }
      const response = await api.post("/expenses", {
        amount: parseFloat(amount),
        category: auxCategory,
        notes: notes,
        date: date,
      });
      console.log(response);
      showMessage({
        message: "Cadastro do gasto efetuado com sucesso!",
        type: "success",
        icon: "success",
        duration: 4000,
      });
      navigation.navigate("Inicio");
    } catch (error) {
      showMessage({
        message: "Nao foi possível cadastrar o gasto!",
        type: "danger",
        icon: "danger",
      });
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <SafeArea>
      <Container>
        <Header
          name="Adicionar gasto"
          onPressNavigate={() => navigation.navigate("Inicio")}
        />
        <Date
          marginTop={screenHeight * 0.02}
          marginLeft={0}
          label="Data"
          initialText="Selecione..."
          setSelectedDate={setDate}
        />
        <Dropdown
          label="Tipo"
          data={data}
          marginTop={screenHeight * 0.02}
          option="Selecione..."
          setOption={setCategory}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, backgroundColor: `#f8f8f8` }}
        >
          <InputValue
            title="Valor"
            marginLeft={0}
            marginTop={screenHeight * 0.02}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="R$"
            keyboardType="numeric"
          />
        </KeyboardAvoidingView>
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
          marginTop={screenHeight * 0.075}
          disabled={loading}
          loading={loading}
          text="Salvar"
          onPress={addExpense}
          color="black"
          background={colors.modalIcons}
          size={16}
          textColor="white"
        />
      </Container>
    </SafeArea>
  );
}
