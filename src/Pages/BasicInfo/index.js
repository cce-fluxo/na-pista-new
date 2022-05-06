import { useState } from "react";

import { Container, TitleContainer, Text, ButtonContainer } from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Dropdown from "../../Components/Dropdown";
import Date from "../../Components/Date";

export default function BasicInfo({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

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
          onChangeText={onChangeEmail}
          placeholder=""
        />
        <Input
          title={"Sobrenome"}
          marginLeft={0}
          marginTop={30}
          onChangeText={onChangePassword}
          placeholder=""
        />
        <Dropdown label="Identidade de Gênero" data={data} marginTop={30} />
        {/* <Date label="Data de Nascimento"  marginTop={30}/> - resolver essa parte, calendario com datas invisíveis */}

        <ButtonContainer>
          <Button
            width={"90%"}
            text="Próximo"
            marginTop={350}
            marginLeft={0}
            background={"white"}
            size={18}
            onPress={() => navigation.navigate("Onde voce mora")}
          />
        </ButtonContainer>
      </Container>
    </SafeArea>
  );
}
