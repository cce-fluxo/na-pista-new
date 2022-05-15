import { useState } from "react";
import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  AddContainer,
  AddText,
  FlatList,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import AddItemModal from "../../Components/AddItemModal";

export default function Vehicles({ navigation, route }) {
  const {
    email,
    password,
    firstName,
    lastName,
    gender,
    birthDate,
    state,
    city,
    neighborhood,
  } = route.params;
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      title: "A pé",
    },
    {
      id: 2,
      title: "Bicicleta",
    },
    {
      id: 3,
      title: "Bicicleta elétrica",
    },
    {
      id: 4,
      title: "Bicicleta motorizada",
    },
    {
      id: 5,
      title: "Moto",
    },
    {
      id: 6,
      title: "Carro",
    },
    {
      id: 7,
      title: "Patinete",
    },
  ]);

  function nextScreen() {
    if (!vehicles) {
      showMessage({
        message: "Falta preencher a lista de veículos!",
        type: "danger",
        icon: "danger",
      });
    } else {
      navigation.navigate("Plataformas", {
        email,
        password,
        firstName,
        lastName,
        gender,
        birthDate,
        state,
        city,
        neighborhood,
        vehicles,
      });
    }
  }

  const [checkboxes, setCheckboxes] = useState(initialList);

  const Item = ({ item }) => <Checkbox marginTop={30} label={item.title} />;

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
          <Text title={true}>Veículos de Trabalho</Text>
          <Text>
            Você pode editar essas informações{"\n"}a qualquer momento.
          </Text>
        </TitleContainer>

        <FlatList
          data={checkboxes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <AddItemModal
          label="Adicionar novo veículo"
          initialList={initialList}
          setInitialList={setInitialList}
          checkboxes={checkboxes}
          setCheckboxes={setCheckboxes}
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
