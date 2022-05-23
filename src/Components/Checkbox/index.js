import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors, fonts } from "../../Constants/constants";
import { Container } from "./styles";

const Checkbox = ({ marginTop, label }) => {
  return (
    <Container marginTop={marginTop}>
      <BouncyCheckbox
        fillColor="black"
        unfillColor={colors.background}
        text={label}
        iconStyle={{ borderColor: "black", borderRadius: 0 }}
        textStyle={{
          fontFamily: fonts.Ubuntu,
          fontSize: 14,
          color: "black",
          textDecorationLine: "none",
        }}
        onPress={(isChecked) => {}}
      />
    </Container>
  );
};

export default Checkbox;
