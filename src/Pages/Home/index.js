import React, { useState, useEffect } from "react";
import {
  AntDesign,
  FontAwesome,
  Fontisto,
  Entypo,
} from "react-native-vector-icons";
import {
  useQueryClient,
  QueryClient,
  useMutation,
  useQuery,
} from "react-query";

import {
  Container,
  Text,
  TextContainer,
  IconContainer,
  EarningContainer,
  ScrollView,
  View,
  MainContainer,
  ProgressBarContainer,
  ActivityButton,
  LineView,
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Progress from "../../Components/Progress";
import HomeHeader from "../../Components/HomeHeader";
import AddEarningModal from "../../Components/AddEarningModal";
import { colors, screenHeight, screenWidth } from "../../Constants/constants";
import registerForPushNotificationsAsync from "../../Connection/registerForPushNotificationsAsync";
import api from "../../Services/api";
import { useAuth } from "../../Contexts/auth";

const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins, secs };
};

const createTracker = async (newTodo) => {
  const response = await api.post("/trackers", newTodo);
  return response.data;
};

const patchTracker = async (newTodo) => {
  return api.patch(`/trackers/${newTodo.id}`, {
    endedAt: newTodo.endedAt,
    time: newTodo.time * 1000,
  });
};

export default function Home({ navigation }) {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);
  const { trackerId, setTrackerId } = useAuth(); // avaliar se vai precisar de um contexto para isso
  const queryClient = useQueryClient();

  const { data: trackerData, isError } = useQuery(
    ["currentTracker"],
    getCurrentTracker
  ); // a função getCurrentTracker usa o endpoint trackers/current

  const postMutation = useMutation(createTracker, {
    onSuccess: (data, variables, context) => {
      console.log({ data, variables, context });
      setTrackerId(data.id);
      queryClient.invalidateQueries("currentTracker");
    },
    onError: () => {
      queryClient.setQueryData("currentTracker", { startedAt: new Date() });
      setIsActive(true);
    },
    retry: true,
  });

  const patchMutation = useMutation(patchTracker, {
    onSuccess: (data, variables, context) => {
      queryClient.cancelQueries("currentTracker");
      queryClient.setQueryData("currentTracker", undefined);
    },
    onError: () => {
      queryClient.setQueryData("currentTracker", {
        id: trackerData.id,
        endedAt: new Date(),
        time: remainingSecs,
      });
      setIsActive(false);
    },
    retry: true,
  });

  async function getCurrentTracker() {
    return await api.get("trackers/current");
  }

  useEffect(() => {
    if (isError) {
      if (trackerData && trackerData.id) {
        // se o trackerData existe e tem um id, então o tracker foi criado
        setTrackerId(trackerData.id);
        setIsActive(true);
      } else if (trackerData) {
        // se o trackerData existe e não tem um id, então o tracker não foi criado
        console.log(postMutation.status);
      } else {
        setTrackerId(null);
        setIsActive(false);
      }
    }
  }, [isError]);

  useEffect(() => {
    if (trackerData) {
      setIsActive(!isActive);
    }
  }, [trackerData]);

  const toggle = () => {
    if (!isActive) {
      postMutation.mutate({
        startedAt: new Date(),
      });
    } else {
      setIsActive(!isActive);
      patchMutation.mutate({
        id: trackerData.Id,
        endedAt: new Date(),
        time: remainingSecs,
      });
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      setRemainingSecs(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  const today = {
    min: 12,
    max: 80,
    ganhos: 12,
    gastos: 8,
  };

  const week = {
    min: 140,
    max: 500,
    ganhos: 140,
    gastos: 43,
  };

  const month = {
    min: 1130,
    max: 2000,
    ganhos: 1110,
    gastos: 729,
  };

  const [todayObject, setTodayObject] = useState(today);
  const [weekObject, setWeekObject] = useState(week);
  const [monthObject, setMonthObject] = useState(month);
  
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <SafeArea>
      <MainContainer showsVerticalScrollIndicator={false}>
        <HomeHeader
          text={"Bom dia, Daniel"}
          height={screenHeight * 0.32}
          onPressNavigate={() => navigation.navigate("Menu Configurações")}
        />
        <Container>
          <View
            marginTop={screenHeight * 0.15}
            width={screenWidth * 0.93}
            height={screenHeight * 0.29}
            elevation={4}
            borderRadius={8}
            marginLeft={0}
            marginBottom={0}
          >
            <Text
              fontSize={screenWidth * 0.046}
              color={colors.icon}
              marginLeft={screenWidth * 0.044}
              marginTop={screenWidth * 0.044}
            >
              Jornada do dia
            </Text>
            <Text
              fontSize={screenWidth * 0.04}
              color={colors.inputTitle}
              marginLeft={screenWidth * 0.044}
              marginTop={0}
            >
              {isActive
                ? "Estamos gravando automaticamente o seu tempo de trabalho e distância percorrida. Clique no botão abaixo se quiser pausar."
                : "Clique no botão abaixo para começar e vamos gravar automaticamente o seu tempo de trabalho e a distância percorrida."}
            </Text>
            <ActivityButton onPress={toggle}>
              <FontAwesome
                name={isActive ? "stop" : "play"}
                size={screenWidth * 0.04}
                color={colors.icon}
              />
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
                marginTop={0}
                maxWidth={screenWidth * 0.2}
                marginLeft={0}
              >
                <Fontisto
                  name="stopwatch"
                  size={screenWidth * 0.045}
                  color={colors.inputTitle}
                />
                <Text
                  fontSize={screenWidth * 0.03}
                  color={colors.inputTitle}
                  marginLeft={screenWidth * 0.027}
                  marginTop={0}
                >
                  TEMPO
                </Text>
              </TextContainer>
              <Text
                fontSize={screenWidth * 0.1}
                color={colors.time}
                marginLeft={0}
                marginTop={-screenWidth * 0.01}
              >
                {mins < 10 ? mins : mins}:{secs < 10 ? "0" + secs : secs}
              </Text>
            </View>

            <View
              marginTop={-screenHeight * 0.1}
              width={screenWidth * 0.28}
              height={screenHeight * 0.1}
              elevation={0}
              borderRadius={0}
              marginLeft={screenWidth * 0.48}
              marginBottom={0}
            >
              <TextContainer
                justifyContent={"space-around"}
                marginTop={0}
                maxWidth={screenWidth * 0.8}
                marginLeft={0}
              >
                <Entypo
                  name="swap"
                  size={screenWidth * 0.045}
                  color={colors.inputTitle}
                />
                <Text
                  fontSize={screenWidth * 0.03}
                  color={colors.inputTitle}
                  marginLeft={0}
                  marginTop={0}
                >
                  DISTÂNCIA
                </Text>
              </TextContainer>
              <Text
                fontSize={screenWidth * 0.1}
                color={colors.time}
                marginLeft={screenWidth * 0.057}
                marginTop={-screenWidth * 0.01}
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
              marginTop={screenWidth * 0.02}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.046}
                color={colors.icon}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Metas desta semana
              </Text>
              <IconContainer
                marginRight={screenWidth * 0.027}
                onPress={() => navigation.navigate("Resultados")}
              >
                <AntDesign
                  name="right"
                  size={screenWidth * 0.05}
                  color={colors.icon}
                />
              </IconContainer>
            </TextContainer>
            <ProgressBarContainer
              height={screenHeight * 0.1}
              width={screenWidth * 0.93}
              flexDirection={"row"}
              marginTop={-screenWidth * 0.01}
            >
              <Progress
                text={"Dom"}
                color={colors.modalIcons}
                progress={0.5}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
              <Progress
                text={"Seg"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
              <Progress
                text={"Ter"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
              <Progress
                text={"Qua"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
              <Progress
                text={"Qui"}
                color={colors.earningGoalDayOff}
                progress={0}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
              <Progress
                text={"Sex"}
                color={colors.earningGoalDayOff}
                progress={0.2}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
              <Progress
                text={"Sab"}
                color={colors.earningGoalDayOff}
                progress={0.8}
                height={screenWidth * 0.036}
                borderRadius={0}
                width={screenWidth * 0.14}
              />
            </ProgressBarContainer>
          </View>
        </Container>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <EarningContainer
            marginRight={screenWidth * 0.036}
            marginLeft={screenWidth * 0.036}
          >
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenWidth * 0.03}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.032}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                HOJE
              </Text>
              <IconContainer
                marginRight={screenWidth * 0.03}
                onPress={() => navigation.navigate("Resultados")}
              >
                <AntDesign
                  name="right"
                  size={screenWidth * 0.05}
                  color={colors.icon}
                />
              </IconContainer>
            </TextContainer>
            <Text
              fontSize={screenWidth * 0.038}
              color={colors.inputTitle}
              marginLeft={screenWidth * 0.044}
              marginTop={screenWidth * 0.007}
            >
              Meta diária
            </Text>
            <ProgressBarContainer
              rotate={true}
              height={0}
              width={0}
              flexDirection={"column"}
              marginTop={screenWidth * 0.025}
            >
              <Progress
                color={colors.earningGoalDayOff}
                progress={0.5}
                height={screenWidth * 0.022}
                borderRadius={screenWidth * 0.055}
                width={screenWidth * 0.78}
              />
            </ProgressBarContainer>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenWidth * 0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.038}
                color={colors.modalIcons}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                R${todayObject.min}
              </Text>
              <Text
                fontSize={screenWidth * 0.038}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={0}
              >
                R${todayObject.max}
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Ganhos
              </Text>
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.positive}
                marginLeft={0}
                marginTop={0}
              >
                + R${todayObject.ganhos}
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenHeight * 0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Gastos
              </Text>
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.negative}
                marginLeft={0}
                marginTop={0}
              >
                - R${todayObject.gastos}
              </Text>
            </TextContainer>
          </EarningContainer>

          <EarningContainer marginRight={screenWidth * 0.036} marginLeft={0}>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenWidth * 0.03}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.032}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                ESTA SEMANA
              </Text>
              <IconContainer
                marginRight={screenWidth * 0.03}
                onPress={() => navigation.navigate("Resultados")}
              >
                <AntDesign
                  name="right"
                  size={screenWidth * 0.05}
                  color={colors.icon}
                />
              </IconContainer>
            </TextContainer>
            <Text
              fontSize={screenWidth * 0.038}
              color={colors.inputTitle}
              marginLeft={screenWidth * 0.044}
              marginTop={screenWidth * 0.007}
            >
              Meta mensal
            </Text>
            <ProgressBarContainer
              rotate={true}
              height={0}
              width={0}
              flexDirection={"column"}
              marginTop={screenWidth * 0.025}
            >
              <Progress
                color={colors.earningGoalDayOff}
                progress={0.5}
                height={screenWidth * 0.022}
                borderRadius={screenWidth * 0.055}
                width={screenWidth * 0.78}
              />
            </ProgressBarContainer>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.038}
                color={colors.modalIcons}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                R${weekObject.min}
              </Text>
              <Text
                fontSize={screenWidth * 0.038}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={0}
              >
                R${weekObject.max}
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Ganhos
              </Text>
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.positive}
                marginLeft={0}
                marginTop={0}
              >
                + R${weekObject.ganhos}
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenHeight * 0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Gastos
              </Text>
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.negative}
                marginLeft={0}
                marginTop={0}
              >
                - R${weekObject.gastos}
              </Text>
            </TextContainer>
          </EarningContainer>

          <EarningContainer marginRight={screenWidth * 0.036} marginLeft={0}>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenWidth * 0.03}
              maxWidth={screenWidth}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.032}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                ESTE MÊS
              </Text>
              <IconContainer
                marginRight={screenWidth * 0.03}
                onPress={() => navigation.navigate("Resultados")}
              >
                <AntDesign
                  name="right"
                  size={screenWidth * 0.05}
                  color={colors.icon}
                />
              </IconContainer>
            </TextContainer>
            <Text
              fontSize={screenWidth * 0.038}
              color={colors.inputTitle}
              marginLeft={screenWidth * 0.044}
              marginTop={screenWidth * 0.007}
            >
              Meta mensal
            </Text>
            <ProgressBarContainer
              rotate={true}
              height={0}
              width={0}
              flexDirection={"column"}
              marginTop={screenWidth * 0.025}
            >
              <Progress
                color={colors.earningGoalDayOff}
                progress={0.5}
                height={screenWidth * 0.022}
                borderRadius={screenWidth * 0.055}
                width={screenWidth * 0.78}
              />
            </ProgressBarContainer>
            <TextContainer
              justifyContent={"space-between"}
              marginTop={0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.038}
                color={colors.modalIcons}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                R${monthObject.min}
              </Text>
              <Text
                fontSize={screenWidth * 0.038}
                color={colors.inputTitle}
                marginLeft={0}
                marginTop={0}
              >
                R${monthObject.max}
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Ganhos
              </Text>
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.positive}
                marginLeft={0}
                marginTop={0}
              >
                + R${monthObject.ganhos}
              </Text>
            </TextContainer>
            <LineView />
            <TextContainer
              justifyContent={"space-between"}
              marginTop={screenHeight * 0}
              maxWidth={screenWidth * 0.85}
              marginLeft={0}
            >
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.inputTitle}
                marginLeft={screenWidth * 0.017}
                marginTop={0}
              >
                Gastos
              </Text>
              <Text
                fontSize={screenWidth * 0.042}
                color={colors.negative}
                marginLeft={0}
                marginTop={0}
              >
                - R${monthObject.gastos}
              </Text>
            </TextContainer>
          </EarningContainer>
        </ScrollView>
      </MainContainer>
      <AddEarningModal navigation={navigation} />
    </SafeArea>
  );
}
