import { useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import {
  FlatList
} from "react-native";
import Modal from "react-native-modal";
import { Container, ItemContainer, ModalContainer, SelectContainer, SelectText, Title } from './styles';
import { colors,screenHeight } from '../../Constants/constants';



const Dropdown= ({label, data, marginTop, marginLeft, opacity
  } ) => {
 
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState({label: 'Selecione...', value: ''});

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  const Item = ({ item }) => (
    <ItemContainer
      marginTop={20}
      onPress={() => {
        setSelectedValue(item);
        setModalVisible(false);
      }}>
      <SelectText >{item.label}</SelectText>
    </ItemContainer>
  );

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <Container marginTop={marginTop}>
      <Title>{label}</Title>
      <SelectContainer onPress={toggleModal}>
        <SelectText>{selectedValue.label}</SelectText>
        <Icon name="chevron-down" size={30} color={colors.modalIcons} />
      </SelectContainer>  


      <Modal isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}>
        <ModalContainer>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
        />
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Dropdown;