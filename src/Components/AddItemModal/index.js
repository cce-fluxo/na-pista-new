import { useState } from "react";

import Input from "../Input";
import Icon from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";
import { Container, ModalContainer, AddContainer, AddText } from "./styles";
import Button from "../Button";

const AddItemModal = ({
  marginTop,
  marginLeft,
  value,
  label,
  initialList,
  setInitialList,
  checkboxes,
  setCheckboxes,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [idx, incr] = useState(8);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  var key = checkboxes.length;
  function addItemToList() {
    checkboxes.push({ id: ++key, title: newItem });
    setCheckboxes([...checkboxes]);
    setNewItem("");
    setModalVisible(false);
  }

  return (
    <Container>
      <AddContainer onPress={toggleModal}>
        <Icon name="pluscircle" size={30} color={"black"} />
        <AddText>Adicionar outro</AddText>
      </AddContainer>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <ModalContainer>
          <Input
            title={label}
            marginTop={20}
            value={newItem}
            onChangeText={(e) => setNewItem(e)}
            marginLeft={0}
          />
          <Button
            width={"90%"}
            text="Adicionar"
            marginTop={20}
            marginLeft={0}
            background={"white"}
            size={18}
            onPress={addItemToList}
          />
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AddItemModal;
