import { useState } from "react";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
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

const DatePicker = ({ label, marginTop, marginLeft }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("Selecione...");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    toggleModal();
  };

  return (
    <Container marginTop={marginTop} marginLeft={marginLeft} label={label}>
      <Title>{label}</Title>
      <InputContainer onPress={() => showMode("date")}>
        <InputText>{text}</InputText>
        <Icon name="calendar" size={30} color={colors.modalIcons} />
      </InputContainer>

      {show && (
        <DateTimePicker
          value={date}
          isVisible={isModalVisible}
          mode="date"
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default DatePicker;
