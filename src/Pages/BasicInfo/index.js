import React, { useState, useEffect } from "react";
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
  const [gender, setGender] = useState("m");
  const [birthDate, setBirthDate] = useState("2022-05-19T19:16:09.259Z");

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
      value: "f",
      label: "Feminino",
    },
    {
      id: "2",
      value: "m",
      label: "Masculino",
    },
  ];

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  return (
    <SafeArea>
      <Container>
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
          onChangeText={(text) => setFirstName(text)}
          placeholder=""
        />
        <Input
          title={"Sobrenome"}
          marginLeft={0}
          marginTop={30}
          onChangeText={(text) => setLastName(text)}
          placeholder=""
        />
        <Dropdown
          label="Identidade de Gênero"
          data={data}
          marginTop={30}
          setOption={setGender}
        />
        <Date
          label="Data de Nascimento"
          marginTop={30}
          marginLeft={0}
          date={birthDate}
          setDate={setBirthDate}
        />

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
