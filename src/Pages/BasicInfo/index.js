import React, { useState } from "react";
import { ScrollView } from "react-native";
import { showMessage } from "react-native-flash-message";

import { Container, TitleContainer, Text, ButtonContainer } from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Dropdown from "../../Components/Dropdown";
import Date from "../../Components/Date";

export default function BasicInfo({ navigation, route }) {
  const { email, password } = route.params;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  function nextScreen() {
    if (!firstName || !lastName || !gender || !birthDate) {
      showMessage({
        message: "Alguma das informações falta ser preenchida!",
        type: "danger",
        icon: "danger",
      });
    } else {
      navigation.navigate("Onde voce mora", {
        email,
        password,
        firstName,
        lastName,
        gender,
        birthDate,
      });
    }
  }

  const data = [
    {
      id: "1",
      name: "Feminino",
    },
    {
      id: "2",
      name: "Masculino",
    },
    {
      id: "3",
      name: "Não binário"
    },
    {
      id: "4",
      name: "Não declarado"
    }
  ];

  return (
    <SafeArea>
      <Container>
        <ScrollView>
        <TitleContainer>
          <Text title={true}>Informações Básicas</Text>
          <Text>
            Queremos lhe conhecer melhor, mas não se preocupe, não
            compartilharemos com ninguém!
          </Text>
        </TitleContainer>
        <Input
          title={"Nome"}
          marginLeft={0}
          marginTop={50}
          onChangeText={setFirstName}
          placeholder=""
        />
        <Input
          title={"Sobrenome"}
          marginLeft={0}
          marginTop={30}
          onChangeText={setLastName}
          placeholder=""
        />
        <Dropdown
          label="Identidade de Gênero"
          data={data}
          marginTop={30}
          option="Selecione..."
          setOption={setGender}
        />
        <Date
          marginTop={30}
          marginLeft={0}
          label="Data de Nascimento"
          initialText="Selecione..."
          setSelectedDate={setBirthDate}
        />
        </ScrollView>
        <ButtonContainer>
          <Button
            width={"90%"}
            text="Próximo"
            marginTop={350}
            marginLeft={0}
            background={"white"}
            size={18}
            onPress={nextScreen}
          />
        </ButtonContainer>
      </Container>
    </SafeArea>
  );
}
