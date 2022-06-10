import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors, fonts } from "../../Constants/constants";
import { Container } from "./styles";

const Checkbox = ({ marginTop, object, newList, setNewList }) => {
  function checkArray(array) {
    return array === object
  }

  return (
    <Container marginTop={marginTop}>
      <BouncyCheckbox
        isChecked={newList.find(checkArray)}
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
            setNewList(newList.concat([object])) :
            setNewList(newList.splice(newList.indexOf(object), 1))
        }}
      />
    </Container>
  );
};

export default Checkbox;
