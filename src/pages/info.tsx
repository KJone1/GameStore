import colors from "../styles/colors";
import { Flex } from "@chakra-ui/react";
export default function InfoPage() {
  return (
    <Flex
      textAlign="center"
      h="200vh"
      bgColor={colors.grey}
      flexDirection="column"
      alignItems="center"
    >
      <h1>info</h1>
    </Flex>
  );
}
