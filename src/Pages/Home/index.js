import { useState } from "react";
import {
  Container,
  Subcontainer,
  Text,
  ButtonContainer,
  TextContainer,
  IconContainer,
  EarningContainer,
  ScrollView,
  View,
  MainContainer,
  ProgressBarContainer,
  ActivityButton,
  TimeContainer,
  LineView,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Progress from "../../Components/Progress";
import AddEarningModal from "../../Components/AddEarningModal";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Fontisto,
  Entypo,
} from "react-native-vector-icons";
import { colors, screenHeight, screenWidth } from "../../Constants/constants";

export default function Home({ navigation }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  };

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };

  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <SafeArea>
      <MainContainer showsVerticalScrollIndicator={false}>
        <Subcontainer>
          <TextContainer
            justifyContent={"space-between"}
            marginTop={10}
            maxWidth={screenWidth}
            marginLeft={0}
          >
            <Text
              fontSize={20}
              lineHeight={30}
              color="black"
              marginLeft={20}
              marginTop={0}
            >
              Bom dia, Daniel
            </Text>
            <IconContainer
              marginRight={-28}
              onPress={() => navigation.navigate("Plataformas")}
            >
              <AntDesign name="plus" size={24} color={colors.icon} />
            </IconContainer>
            <IconContainer
              marginRight={15}
              onPress={() => navigation.navigate("Menu Configurações")}
            >
              <Ionicons name="settings-sharp" size={24} color={colors.icon} />
            </IconContainer>
          </TextContainer>
        </Subcontainer>

        <Container>
          <View
            marginTop={140}
            width={screenWidth * 0.93}
            height={screenHeight * 0.27}
            elevation={4}
            borderRadius={8}
            marginLeft={0}
            marginBottom={0}
          >
            <Text
              fontSize={16}
              lineHeight={50}
              color={colors.icon}
              marginLeft={20}
              marginTop={0}
            >
              Jornada do dia
            </Text>
            <Text
              fontSize={14}
              lineHeight={20}
              color={colors.inputTitle}
              marginLeft={20}
              marginTop={0}
            >
              Clique no botão abaixo para começar e vamos {"\n"}
              gravar automaticamente o seu tempo de {"\n"}
              trabalho e a distância percorrida.
            </Text>
            <ActivityButton onPress={startTimer}>
              <FontAwesome name="play" size={22} color={colors.icon} />
            </ActivityButton>
            <View
              marginTop={-screenHeight * 0.1}
              width={screenWidth * 0.28}
              height={screenHeight * 0.1}
              elevation={0}
              borderRadius={8}
              marginLeft={-screenWidth * 0.1}
              marginBottom={0}
            >
              <TextContainer
                justifyContent={"space-around"}
                marginTop={10}
                maxWidth={screenWidth * 0.2}
                marginLeft={15}
              >
                <Fontisto
                  name="stopwatch"
                  size={20}
                  color={colors.inputTitle}
                />
                <Text
                  fontSize={12}
                  lineHeight={18}
                  color={colors.inputTitle}
                  marginLeft={5}
                  marginTop={0}
                >
                  TEMPO
                </Text>
              </TextContainer>
              <Text
                fontSize={34}
                lineHeight={31}
                color={colors.time}
                marginLeft={10}
                marginTop={0}
              >
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </Text>
            </View>
            <View
              marginTop={-screenHeight * 0.1}
              width={screenWidth * 0.28}
              height={screenHeight * 0.1}
              elevation={0}
              borderRadius={8}
              marginLeft={screenWidth * 0.55}
              marginBottom={0}
            >
              <TextContainer
                justifyContent={"space-around"}
                marginTop={10}
                maxWidth={screenWidth * 0.8}
                marginLeft={5}
              >
                <Entypo name="swap" size={20} color={colors.inputTitle} />
                <Text
                  fontSize={12}
                  lineHeight={18}
                  color={colors.inputTitle}
                  marginLeft={2}
                  marginTop={0}
                >
                  DISTÂNCIA
                </Text>
              </TextContainer>
              <Text
                fontSize={34}
                lineHeight={31}
                color={colors.time}
                marginLeft={20}
                marginTop={0}
              >
                0
              </Text>
            </View>
          </View>
          <View
            marginTop={20}
            width={screenWidth * 0.93}
            height={screenHeight * 0.2}
            elevation={4}
            borderRadius={8}
            marginLeft={0}
            marginBottom={screenWidth * 0.3}
          >
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.icon}
                marginLeft={30}
                marginTop={0}
              >
                Metas desta semana
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
            <ProgressBarContainer
              height={screenHeight * 0.1}
              width={screenWidth * 0.84}
              flexDirection={"row"}
              marginTop={0}
            >
              <Progress
                text={"Dom"}
                color={colors.modalIcons}
                progress={0.5}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
              <Progress
                text={"Seg"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
              <Progress
                text={"Ter"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
              <Progress
                text={"Qua"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
              <Progress
                text={"Qui"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
              <Progress
                text={"Sex"}
                color={colors.earningGoalDayOff}
                progress={0.2}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
              <Progress
                text={"Sab"}
                color={colors.earningGoalDayOff}
                progress={0.8}
                height={14}
                borderRadius={0}
                width={screenWidth * 0.17}
              />
            </ProgressBarContainer>
          </View>
        </Container>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <EarningContainer marginRight={0} marginLeft={28}>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={13}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={20}
                marginTop={0}
              >
                HOJE
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
            <Text
              fontSize={14}
              lineHeight={15}
              color={colors.inputTitle}
              marginLeft={30}
              marginTop={10}
            >
              Meta Diária
            </Text>
            <ProgressBarContainer
              rotate={true}
              height={0}
              width={0}
              flexDirection={"column"}
              marginTop={15}
            >
              <Progress
                color={colors.earningGoalDayOff}
                progress={0.5}
                height={8}
                borderRadius={20}
                width={screenWidth * 0.72}
              />
            </ProgressBarContainer>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={14}
                lineHeight={20}
                color={colors.modalIcons}
                marginLeft={0}
                marginTop={-10}
              >
                R$12
              </Text>
              <Text
                fontSize={14}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                R$80
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={15}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                Ganhos
              </Text>
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.positive}
                marginLeft={0}
                marginTop={-10}
              >
                + R$12,00
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={15}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                Gastos
              </Text>
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.negative}
                marginLeft={0}
                marginTop={-10}
              >
                - R$8,00
              </Text>
            </TextContainer>
          </EarningContainer>

          <EarningContainer marginRight={0} marginLeft={20}>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={13}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={20}
                marginTop={0}
              >
                ESTA SEMANA
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
            <Text
              fontSize={14}
              lineHeight={15}
              color={colors.inputTitle}
              marginLeft={30}
              marginTop={10}
            >
              Meta Semanal
            </Text>
            <ProgressBarContainer
              rotate={true}
              height={0}
              width={0}
              flexDirection={"column"}
              marginTop={15}
            >
              <Progress
                color={colors.earningGoalDayOff}
                progress={0.2}
                height={8}
                borderRadius={20}
                width={screenWidth * 0.72}
              />
            </ProgressBarContainer>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={15}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={14}
                lineHeight={20}
                color={colors.modalIcons}
                marginLeft={0}
                marginTop={-10}
              >
                R$140
              </Text>
              <Text
                fontSize={14}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                R$500
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={15}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                Ganhos
              </Text>
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.positive}
                marginLeft={0}
                marginTop={-10}
              >
                + R$140,00
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={15}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                Gastos
              </Text>
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.negative}
                marginLeft={0}
                marginTop={-10}
              >
                - R$43,00
              </Text>
            </TextContainer>
          </EarningContainer>
          <EarningContainer marginRight={20} marginLeft={20}>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={13}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={20}
                marginTop={0}
              >
                ESTE MÊS
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
            <Text
              fontSize={14}
              lineHeight={15}
              color={colors.inputTitle}
              marginLeft={30}
              marginTop={10}
            >
              Meta Mensal
            </Text>
            <ProgressBarContainer
              rotate={true}
              height={0}
              width={0}
              flexDirection={"column"}
              marginTop={15}
            >
              <Progress
                color={colors.earningGoalDayOff}
                progress={0.5}
                height={8}
                borderRadius={20}
                width={screenWidth * 0.72}
              />
            </ProgressBarContainer>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={15}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={14}
                lineHeight={20}
                color={colors.modalIcons}
                marginLeft={0}
                marginTop={-10}
              >
                R$1130
              </Text>
              <Text
                fontSize={14}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                R$2.000
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                Ganhos
              </Text>
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.positive}
                marginLeft={0}
                marginTop={-10}
              >
                + R$1130,00
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={10}
              maxWidth={screenWidth * 0.76}
              marginLeft={screenWidth * 0.05}
            >
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={-10}
              >
                Gastos
              </Text>
              <Text
                fontSize={16}
                lineHeight={20}
                color={colors.negative}
                marginLeft={0}
                marginTop={-10}
              >
                - R$729,00
              </Text>
            </TextContainer>
          </EarningContainer>
        </ScrollView>
      </MainContainer>
      <AddEarningModal />
    </SafeArea>
  );
}
