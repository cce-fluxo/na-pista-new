import {
    Container,
    TextContainer,
    Text,
    IconContainer
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import {AntDesign} from "react-native-vector-icons";
import { colors, screenHeight, screenWidth } from "../../Constants/constants";

export default function SettingsMenu({navigation, fontSize, marginLeft, marginRight, marginTop}) {
  return (
    <Container>
        <IconContainer
                marginRight={10}
                marginLeft={20}
                onPress={() => navigation.navigate("Plataformas")}>
                <AntDesign name="close" size={24} color={colors.icon} />
        </IconContainer>
        <TextContainer justifyContent={'space-between'}>
              <Text fontSize={25} color={colors.icon} marginLeft={20} marginTop={15}>
                Perfil
              </Text>
              <IconContainer
                marginRight={10}
                marginLeft={50}
                onPress={() => navigation.navigate("Plataformas")}>
                <AntDesign name="right" size={22} color={colors.icon} />
              </IconContainer>
        </TextContainer>
        <TextContainer justifyContent={'space-between'}>
              <Text fontSize={25} color={colors.icon} marginLeft={20} marginTop={15}>
                Configurações
              </Text>
              <IconContainer
                marginRight={10}
                marginLeft={50}
                onPress={() => navigation.navigate("Plataformas")}>
                <AntDesign name="right" size={22} color={colors.icon} />
              </IconContainer>
        </TextContainer>    
        <TextContainer justifyContent={'space-between'}>
              <Text fontSize={25} color={colors.icon} marginLeft={20} marginTop={15}>
                Sobre
              </Text>
              <IconContainer
                marginRight={10}
                marginLeft={50}
                onPress={() => navigation.navigate("Plataformas")}>
                <AntDesign name="right" size={22} color={colors.icon} />
              </IconContainer>
        </TextContainer>
        <Text fontSize={20} color={colors.inputTitle} marginLeft={30} marginTop={35}>
                Ajuda
        </Text>    
        <Text fontSize={20} color={colors.inputTitle} marginLeft={30} marginTop={65}>
                Deslogar
        </Text>   
    </Container>
  )
}