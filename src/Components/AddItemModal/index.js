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

  // const addItemToList = () => {
  //   var newArray = ({...initialList , id: idx, title: newItem});
  //   incr(idx + 1);
  //   console.log(initialList.length);
  //   setInitialList(newArray);
  //   setCheckboxes(newArray);
  //   setModalVisible(false);
  // }

  var key = checkboxes.length;
  const addItemToList = useCallback(() => {
        setCheckboxes((prevState) => [{ id: checkboxes.length + 1, title: newItem }, ...prevState]);
        setNewItem('');
        setModalVisible(false);  
  }, [checkboxes.length])

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