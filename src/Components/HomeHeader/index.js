import {
  fonts,
  colors,
  screenHeight,
  screenWidth,
} from "../../Constants/constants";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import {
  Subcontainer,
  TextContainer,
  Text,
  IconContainer,
  ViewContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({ text, height, onPressNavigate }) => {
  return (
    <Subcontainer text={text} height={height}>
      <TextContainer
        justifyContent={"space-between"}
        marginTop={0}
        maxWidth={screenWidth}
        marginLeft={0}
      >
        <Text
          fontSize={screenWidth * 0.055}
          lineHeight={screenWidth * 0.083}
          color="black"
          marginLeft={screenWidth * 0.03}
          marginTop={0}
        >
          {text}
        </Text>
        <ViewContainer>
          <IconContainer marginRight={0}>
            <AntDesign
              name="plus"
              size={screenWidth * 0.066}
              color={colors.icon}
            />
          </IconContainer>
          <IconContainer
            marginRight={0}
            onPress={onPressNavigate}
          >
            <Ionicons
              name="settings-sharp"
              size={screenWidth * 0.066}
              color={colors.icon}
            />
          </IconContainer>
        </ViewContainer>
      </TextContainer>
    </Subcontainer>
  );
};

export default HomeHeader;
