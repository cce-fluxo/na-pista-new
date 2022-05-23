import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;

export const colors = {
  background: "#FFBF00",
  inputTitle: "rgba(0, 0, 0, 0.6)",
  icon: "rgba(0, 0, 0, 0.87);",
  time: "rgba(0, 0, 0, 0.38)",
  line: "rgba(33, 33, 33, 0.08);",
  modal: "#3E46B0",
  modalIcons: "#CC9900",
  earningGoalDayOff: "#FFD966",
  positive: "#2AA144",
  negative: "#B00020",
};

export const fonts = {
  BebasNeue: "BebasNeue_400Regular",
  Ubuntu: "Ubuntu_500Medium",
  UbuntuRegular: "Ubuntu_400Regular",
};
