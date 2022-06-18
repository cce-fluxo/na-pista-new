import {
  Container,
  TextContainer,
  Text,
  IconContainer,
  ButtonContainer,
  View,
  IconClose,
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
      <IconClose
        marginRight={screenWidth * 0.027}
        marginLeft={screenWidth * 0.055}
        marginTop={screenWidth * 0.055}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="close" size={screenWidth * 0.07} color={colors.icon} />
      </IconClose>
      <TextContainer
        onPress={() => navigation.navigate("Perfil")}
        justifyContent={"space-between"}
      >
        <Text fontSize={screenWidth * 0.07} color={colors.icon} marginLeft={screenWidth * 0.055} marginTop={0}>
          Perfil
        </Text>
        <IconContainer
          marginRight={10}
          marginLeft={screenWidth * 0.138}
          marginTop={0}
          // onPress={() => navigation.navigate("Perfil")}
        >
          <AntDesign name="right" size={22} color={colors.icon} />
        </IconContainer>
      </TextContainer>
      <View />
      <TextContainer
        onPress={() => navigation.navigate("Configurações")}
        justifyContent={"space-between"}
      >
        <Text fontSize={screenWidth * 0.07} color={colors.icon} marginLeft={screenWidth * 0.055} marginTop={0}>
          Configurações
        </Text>
        <IconContainer
          marginRight={10}
          marginLeft={screenWidth * 0.138}
          marginTop={0}
          // onPress={() => navigation.navigate("Configurações")}
        >
          <AntDesign name="right" size={22} color={colors.icon} />
        </IconContainer>
      </TextContainer>
      <View />
      <TextContainer
        onPress={() => navigation.navigate("Home")}
        justifyContent={"space-between"}
      >
        <Text fontSize={screenWidth * 0.07} color={colors.icon} marginLeft={screenWidth * 0.055} marginTop={0}>
          Sobre
        </Text>
        <IconContainer
          marginRight={10}
          marginLeft={screenWidth * 0.138}
          marginTop={0}
          // onPress={() => navigation.navigate("Home")}
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
        marginTop={screenWidth * 0.138}
        onPress={() => navigation.navigate("ExportarDados")}
      >
        <Text
          fontSize={screenWidth * 0.055}
          color={colors.inputTitle}
          marginLeft={screenWidth * 0.027}
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
        marginTop={screenWidth * 0.138}
        onPress={() => navigation.navigate("Ajuda")}
      >
        <Text
          fontSize={screenWidth * 0.055}
          color={colors.inputTitle}
          marginLeft={screenWidth * 0.027}
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
        marginTop={screenWidth * 0.138}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          fontSize={screenWidth * 0.055}
          color={colors.inputTitle}
          marginLeft={screenWidth * 0.027}
          marginTop={0}
          onPress={() => navigation.navigate("First")}
        >
          Deslogar
        </Text>
      </ButtonContainer>
    </Container>
  );
}
