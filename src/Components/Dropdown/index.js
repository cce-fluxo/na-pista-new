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
import { colors } from "../../Constants/constants";

const Dropdown = ({ label, data, marginTop, option, setOption }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: 0,
    name: option,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const Item = ({ item }) => (
    <ItemContainer
      marginTop={20}
      onPress={() => {
        setSelectedValue(item);
        setOption(item.name);
        setModalVisible(false);
      }}
    >
      <SelectText>{item.name}</SelectText>
    </ItemContainer>
  );

  return (
    <Container marginTop={marginTop}>
      <Title>{label}</Title>
      <SelectContainer onPress={toggleModal}>
        <SelectText>{selectedValue.name}</SelectText>
        <Icon name="chevron-down" size={30} color={colors.modalIcons} />
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
