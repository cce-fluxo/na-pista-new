import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Entypo";
import { colors } from "../../Constants/constants";
import {
  Container,
  ModalContainer,
  Title,
  InputText,
  InputContainer,
} from "./styles";

const Date = ({ label, marginTop, marginLeft }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    toggleModal();
  };

  return (
    <Container marginTop={marginTop} marginLeft={marginLeft}>
      <Title>{label}</Title>
      <InputContainer onPress={toggleModal}>
        <InputText>{selectedValue}</InputText>
        <Icon name="calendar" size={30} color={colors.background} />
      </InputContainer>

      <DateTimePickerModal
        isVisible={isModalVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={toggleModal}
      />
    </Container>
  );
};

export default Date;
