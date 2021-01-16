import { Box, Spinner, Center } from "@chakra-ui/react";
import colors from "../styles/colors";
export default function LoadingScreen() {
  return (
    <Box bgColor={colors.grey} h="100vh">
      <Center>
        <Spinner
          color={colors.pink}
          size="xl"
          thickness="4px"
          speed="0.65s"
          mt="50vh"
        />
      </Center>
    </Box>
  );
}
