import {
  Container,
  ViewContainer,
  ImageView,
  ImageContainer,
  Text,
  TextContainer,
} from "./styles";
import {
  colors,
  screenHeight,
  screenWidth,
  fonts,
} from "../../Constants/constants";
import iFood from "../../Assets/ifood.png";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ActivityTransactions = ({
  source,
  plataforma,
  categoria,
  preco,
  horario,
  color,
}) => {
  return (
    <Container
      plataforma={plataforma}
      categoria={categoria}
      preco={preco}
      horario={horario}
      source={source}
      color={color}
    >
      <ImageView>
        <ImageContainer source={source}></ImageContainer>
      </ImageView>
      <ViewContainer>
        <TextContainer style={{justifyContent:'space-between'}}>
          <Text
            fontSize={screenWidth * 0.044}
            color={colors.platforms}
            marginLeft={screenWidth * 0.044}
            marginTop={0}
          >
            {plataforma}
          </Text>
          <Text
            fontSize={screenWidth * 0.044}
            color={color}
            marginLeft={screenWidth * 0.044}
            marginTop={0}
          >
           {preco}
         </Text>
        </TextContainer>
        <TextContainer style={{justifyContent:'space-between'}}>
          <Text
            fontSize={screenWidth * 0.038}
            color={colors.inputTitle}
            marginLeft={screenWidth * 0.044}
            marginTop={0}
          >
            {categoria}
          </Text>
          <Text
            fontSize={screenWidth * 0.038}
            color={colors.inputTitle}
            marginLeft={screenWidth * 0.044}
            marginTop={0}
          >
            {horario}
          </Text>
        </TextContainer>
      </ViewContainer>
    </Container>
  );
};

export default ActivityTransactions;
