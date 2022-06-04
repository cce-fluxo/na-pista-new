import { Container, ImageContainer, Text, ViewContainer } from "./styles";
import { colors, screenWidth, fonts } from "../../Constants/constants";

const ActivityOptions = ({ source, text }) => {
  return (
    <Container text={text} source={source}>
      <ViewContainer>
        <ImageContainer source={source} />
        <Text
          fontSize={screenWidth * 0.033}
          color={colors.platforms}
          marginLeft={screenWidth * 0.008}
          marginTop={0}
        >
          {text}
        </Text>
      </ViewContainer>
    </Container>
  );
};

export default ActivityOptions;
