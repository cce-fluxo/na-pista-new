import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  Image,
} from "./styles";
import Background from "../../Assets/Images/bags.png";
import { colors } from "../../Constants/constants";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";

export default function FirstScreen({ navigation }) {
  return (
    <SafeArea>
      <Container>
        <Image source={Background} resizeMode="cover">
          <TitleContainer>
            <Text title={true}>NA{"\n"}PISTA</Text>

            <Text>Gestão financeira {"\n"}para entregadores</Text>
          </TitleContainer>
          <ButtonContainer>
            <Button
              width={"90%"}
              text="Login"
              border={false}
              marginTop={15}
              marginLeft={0}
              background={"white"}
              size={18}
              onPress={() => navigation.navigate("Login")}
            />
            <Button
              width={"90%"}
              text="Criar conta"
              border={true}
              marginTop={15}
              marginLeft={0}
              background={"rgba(0, 0, 0, 0.01)"}
              size={18}
              onPress={() => navigation.navigate("Criar conta")}
            />
          </ButtonContainer>
        </Image>
      </Container>
    </SafeArea>
  );
}
