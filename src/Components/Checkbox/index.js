import React, { useState, useEffect } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors, fonts } from "../../Constants/constants";
import { Container } from "./styles";

const Checkbox = ({ marginTop, object, newList, setNewList }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setNewList((prev) => [...prev, object])
    setIsChecked(true);
  }

  function handleUncheck() {
    setNewList(newList.filter(SeiLa => SeiLa.id !== object.id));
    setIsChecked(false);
  }

  useEffect(() => {
    setIsChecked(() => newList.findIndex(SeiLa => SeiLa.id === object.id)!==-1);
  }, [newList])

  return (
    <Container marginTop={marginTop}>
      <BouncyCheckbox
        isChecked={isChecked}
        fillColor="black"
        unfillColor={colors.background}
        text={object.name}
        iconStyle={{ borderColor: "black", borderRadius: 0 }}
        disableBuiltInState
        textStyle={{
          fontFamily: fonts.Ubuntu,
          fontSize: 14,
          color: "black",
          textDecorationLine: "none",
        }}
        onPress={() => {
          isChecked ? 
            handleUncheck() :
            handleCheck();
        }}
      />
    </Container>
  );
};

export default Checkbox;
