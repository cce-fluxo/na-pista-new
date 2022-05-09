import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { HeaderView, HeaderButton, HeaderText } from "./styles";
import { colors } from "../../Constants/constants";

export default Header = ({ name, onPressNavigate }) => {
  return (
    <HeaderView>
      <HeaderButton onPress={onPressNavigate}>
          <AntDesign name="left" size={22} color={colors.icon} />
      </HeaderButton>
      <HeaderText>{name}</HeaderText>
    </HeaderView>
  );
}
