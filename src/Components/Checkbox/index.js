import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors, fonts } from "../../Constants/constants";
import { Container } from "./styles";

const Checkbox = ({ marginTop, object, newList, setNewList }) => {
  return (
    <Container marginTop={marginTop}>
      <BouncyCheckbox
        isChecked={newList.find(object => object.id)}
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
            setNewList(newList.splice(object.id, 0, object)) :
            setNewList(newList.splice(object.id, 1))
        }}
      />
    </Container>
  );
};

export default Checkbox;
