import React, { useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors, fonts } from "../../Constants/constants";
import { Container } from "./styles";

const Checkbox = ({ marginTop, object, newList, setNewList }) => {
  const [auxiliar, setAuxiliar] = useState(newList);
  
  function checkArray(array) {
    return array === object;
  }

  return (
    <Container marginTop={marginTop}>
      <BouncyCheckbox
        isChecked={auxiliar.find(checkArray)}
        fillColor="black"
        unfillColor={colors.background}
        text={object.name}
        iconStyle={{ borderColor: "black", borderRadius: 0 }}
        textStyle={{
          fontFamily: fonts.Ubuntu,
          fontSize: 14,
          color: "black",
          textDecorationLine: "none",
        }}
        onPress={(isChecked) => {
          isChecked ? 
            setNewList(auxiliar.push(object)) :
            setNewList(auxiliar.filter(object => object.id !== id))
        }}
      />
    </Container>
  );
};

export default Checkbox;
