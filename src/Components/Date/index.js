import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Entypo";

import { colors } from "../../Constants/constants";
import { Container, Title, InputText, InputContainer } from "./styles";

const DatePicker = ({
  label,
  marginTop,
  marginLeft,
  initialText,
  setSelectedDate,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, setText] = useState("");

  const setInitialText = () => {
    if (initialText === "Selecione...") {
      setText(initialText);
    } else {
      let tempDate = new Date(initialText);
      let fDate =
        tempDate.getDate() +
        "/" +
        (tempDate.getMonth() + 1) +
        "/" +
        tempDate.getFullYear();
      setText(fDate);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onConfirm = (date) => {
    setSelectedDate(date);
    let tempDate = new Date(date);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };

  useEffect(() => {
    setInitialText();
  }, [])

  return (
    <Container marginTop={marginTop} marginLeft={marginLeft} label={label}>
      <Title>{label}</Title>
      <InputContainer onPress={showDatePicker}>
        <InputText>{text}</InputText>
        <Icon name="calendar" size={30} color={colors.modalIcons} />
      </InputContainer>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={onConfirm}
        onCancel={hideDatePicker}
        onChange={onConfirm}
      />
    </Container>
  );
};

export default DatePicker;
