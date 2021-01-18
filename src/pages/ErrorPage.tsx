import colors from "../styles/colors";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

import { NavLink } from "react-router-dom";

export default function E404() {
  return (
    <Flex
      textAlign="center"
      h="100vh"
      bgColor={colors.grey}
      flexDirection="column"
      justifyContent="center"
    >
      <Heading size="xl" color="white" mb={4}>
        404 - it seems you had an error
      </Heading>
      <Flex flexDirection="row" justifyContent="center">
        <Heading size="lg" color="white">
          Please go back{" "}
        </Heading>
        <BsArrowRight
          style={{
            alignSelf: "center",
            marginLeft: "20px",
            transform: "scale(1.5)",
            color: "white",
          }}
        />

        <NavLink to="/">
          <Button
            color="#ff165d"
            borderColor="#ff165d"
            variant="outline"
            ml={4}
            fontWeight="800"
            letterSpacing="0.8px"
          >
            Home
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
}
