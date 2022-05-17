import { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Modal from "react-native-modal";

import {
  Container,
  ItemContainer,
  ModalContainer,
  SelectContainer,
  SelectText,
  Title,
} from "./styles";
import { colors, screenHeight } from "../../Constants/constants";

const Dropdown = ({ label, data, marginTop, setOption }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    label: "Selecione...",
    value: "",
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const Item = ({ item }) => (
    <ItemContainer
      marginTop={20}
      onPress={() => {
        setSelectedValue(item);
        setOption(item)
        setModalVisible(false);
      }}
    >
      <SelectText>{item.label}</SelectText>
    </ItemContainer>
  );

  return (
    <Container marginTop={marginTop}>
      <Title>{label}</Title>
      <SelectContainer onPress={toggleModal}>
        <SelectText>{selectedValue.label}</SelectText>
        <Icon name="chevron-down" size={30} color={colors.background} />
      </SelectContainer>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <ModalContainer>
          {data.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Dropdown;
