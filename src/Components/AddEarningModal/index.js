import { useState } from "react";
import Input from "../Input";
import { AntDesign, MaterialIcons } from "react-native-vector-icons";
import Modal from "react-native-modal";
import {
  Container,
  TextContainer,
  AddContainer,
  AddText,
  AddView,
  CloseContainer,
  ModalContainer,
} from "./styles";
import Button from "../Button";
import { colors, screenHeight, screenWidth } from "../../Constants/constants";

const AddEarningModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  return (
    <Container>
      <AddContainer
        onPress={toggleModal}
        width={screenWidth * 0.16}
        height={screenWidth * 0.16}
        backgroundColor={colors.modal}
      >
        <AntDesign name="plus" size={screenWidth * 0.072} color="white" />
      </AddContainer>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        hasBackdrop={true}
        transparent={true}
        backdropColor="#F8F8F8"
        animationType="none"
        backdropOpacity={0.97}
      >
        <ModalContainer>
          <TextContainer>
            <AddText>Adicionar Ganho</AddText>
            <AddContainer
              onPress={toggleModal}
              width={screenWidth * 0.09}
              height={screenWidth * 0.09}
              backgroundColor={"white"}
            >
              <MaterialIcons
                name="pedal-bike"
                size={screenWidth * 0.07}
                color={colors.modalIcons}
              />
            </AddContainer>
          </TextContainer>
          <TextContainer>
            <AddText>Adicionar Ganhos Múltiplos</AddText>
            <AddContainer
              onPress={toggleModal}
              width={screenWidth * 0.09}
              height={screenWidth * 0.09}
              backgroundColor={"white"}
            >
              <MaterialIcons
                name="pedal-bike"
                size={screenWidth * 0.07}
                color={colors.modalIcons}
              />
            </AddContainer>
          </TextContainer>
          <TextContainer>
            <AddText>Adicionar Gasto</AddText>
            <AddContainer
              onPress={toggleModal}
              width={screenWidth * 0.09}
              height={screenWidth * 0.09}
              backgroundColor={"white"}
            >
              <MaterialIcons
                name="attach-money"
                size={screenWidth * 0.07}
                color={colors.modalIcons}
              />
            </AddContainer>
          </TextContainer>
        </ModalContainer>

        <CloseContainer
          onPress={() => setModalVisible(false)}
          width={screenWidth * 0.16}
          height={screenWidth * 0.16}
        >
          <AntDesign name="close" size={screenWidth * 0.072} color="white" />
        </CloseContainer>
      </Modal>
    </Container>
  );
};

export default AddEarningModal;
