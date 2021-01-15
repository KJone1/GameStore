import { Box, SimpleGrid, AspectRatio, Image, Center } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import colors from "../styles/colors";

export default function Grid(props: any) {
  const smallTarget = {
    pathname: `${props.match.url.slice(0, -2)}/${
      Number(props.match.params.id) + 1
    }`,
  };
  const bigTarget = {
    pathname: `${props.match.url.slice(0, -3)}/${
      Number(props.match.params.id) + 1
    }`,
  };
  return (
    <SimpleGrid columns={5} spacingX={"2vw"} spacingY={"3vh"} mt="18vh">
      {props.src.results.slice(1).map((array: any) => (
        <Box
          h="25vh"
          w="10.5vw"
          minW="8vw"
          minH="15vh"
          key={array.id}
          my={2}
          _hover={{
            transform: "scale(1.19)",
            borderWidth: "4px",
            borderColor: `${colors.pink}`,
            borderRadius: "4px",
          }}
        >
          <AspectRatio maxW="100%" minW="80%" h="100%" ratio={4 / 3}>
            <Image
              borderRadius="2px"
              src={array.background_image}
              alt=""
              objectFit="cover"
            />
          </AspectRatio>
        </Box>
      ))}
      <Center>
        <NavLink
          style={{ color: `${colors.pink}` }}
          to={Number(props.match.params.id) > 9 ? bigTarget : smallTarget}
        >
          NEXT PAGE
        </NavLink>
      </Center>
    </SimpleGrid>
  );
}
