import {
  Container,
  TextContainer,
  Text,
  IconContainer,
  ButtonContainer,
  View,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import { AntDesign } from "react-native-vector-icons";
import { colors, screenHeight, screenWidth } from "../../Constants/constants";
import Button from "../../Components/Button";

export default function SettingsMenu({
  navigation,
  fontSize,
  marginLeft,
  marginRight,
  marginTop,
}) {
  return (
    <Container>
      <IconContainer
        marginRight={10}
        marginLeft={20}
        marginTop={20}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="close" size={28} color={colors.icon} />
      </IconContainer>
      <TextContainer justifyContent={"space-between"}>
        <Text fontSize={25} color={colors.icon} marginLeft={20} marginTop={15}>
          Perfil
        </Text>
        <IconContainer
          marginRight={10}
          marginLeft={50}
          marginTop={0}
          onPress={() => navigation.navigate("Plataformas")}
        >
          <AntDesign name="right" size={22} color={colors.icon} />
        </IconContainer>
      </TextContainer>
      <View />
      <TextContainer justifyContent={"space-between"}>
        <Text fontSize={25} color={colors.icon} marginLeft={20} marginTop={15}>
          Configurações
        </Text>
        <IconContainer
          marginRight={10}
          marginLeft={50}
          marginTop={0}
          onPress={() => navigation.navigate("Plataformas")}
        >
          <AntDesign name="right" size={22} color={colors.icon} />
        </IconContainer>
      </TextContainer>
      <View />
      <TextContainer justifyContent={"space-between"}>
        <Text fontSize={25} color={colors.icon} marginLeft={20} marginTop={15}>
          Sobre
        </Text>
        <IconContainer
          marginRight={10}
          marginLeft={50}
          marginTop={0}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="right" size={22} color={colors.icon} />
        </IconContainer>
      </TextContainer>
      <View />
      <ButtonContainer
        width={screenWidth * 0.91}
        height={screenHeight * 0.04}
        marginLeft={0}
        marginRight={0}
        marginTop={50}
        onPress={() => navigation.navigate("ExportarDados")}
      >
        <Text
          fontSize={20}
          color={colors.inputTitle}
          marginLeft={10}
          marginTop={0}
        >
          Exportar dados
        </Text>
      </ButtonContainer>
      <ButtonContainer
        width={screenWidth * 0.91}
        height={screenHeight * 0.04}
        marginLeft={0}
        marginRight={0}
        marginTop={50}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          fontSize={20}
          color={colors.inputTitle}
          marginLeft={10}
          marginTop={0}
        >
          Ajuda
        </Text>
      </ButtonContainer>
      <ButtonContainer
        width={screenWidth * 0.91}
        height={screenHeight * 0.04}
        marginLeft={0}
        marginRight={0}
        marginTop={50}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          fontSize={20}
          color={colors.inputTitle}
          marginLeft={10}
          marginTop={0}
          onPress={() => navigation.navigate("First")}
        >
          Deslogar
        </Text>
      </ButtonContainer>
    </Container>
  );
}