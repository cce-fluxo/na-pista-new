import React, { useState, useCallback } from "react";
import Modal from "react-native-modal";
import {
  Container,
  ModalContainer,
  AddContainer,
  AddText,
  Input,
  TitleContainer,
  IconContainer,
  Text,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import Button from "../Button";
import { colors } from "../../Constants/constants";

const AddItemModal = ({
  text,
  postRequest
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  function addItemToList() {
    postRequest(newItem);
    setNewItem("");
    setModalVisible(false);
  }

  return (
    <Container>
      <AddContainer onPress={toggleModal}>
        <AntDesign name="pluscircle" size={30} color={"black"} />
        <AddText>Adicionar outro</AddText>
      </AddContainer>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <ModalContainer>
          <TitleContainer>
            <Text
              fontSize={20}
              color={"black"}
              marginLeft={10}
              marginTop={0}
              marginBottom={0}
            >
              Adicionar
            </Text>
            <IconContainer onPress={toggleModal}>
              <AntDesign name="close" size={24} color="black" />
            </IconContainer>
          </TitleContainer>
          <Text
            fontSize={14}
            color={colors.inputTitle}
            marginLeft={30}
            marginTop={4}
            marginBottom={10}
          >
            {text}
          </Text>
          <Input
            value={newItem}
            onChangeText={(e) => setNewItem(e)}
            style={{ borderWidth: 1.0, borderColor: colors.line }}
          />
          <Button
            width={"85%"}
            text="Beleza"
            marginTop={20}
            disabled={newItem === "" ? true : false}
            marginLeft={0}
            background={newItem === "" ? colors.inputTitle : colors.background}
            size={18}
            onPress={addItemToList}
            style={{ color: "red" }}
          />
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AddItemModal;
