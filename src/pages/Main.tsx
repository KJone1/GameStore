import colors from "../styles/colors";
import { Flex } from "@chakra-ui/react";

export default function MainPage() {
  return (
    <Flex
      textAlign="center"
      h="100vh"
      bgColor={colors.grey}
      flexDirection="column"
      alignItems="center"
    >
      <h1>main</h1>
    </Flex>
  );
}
