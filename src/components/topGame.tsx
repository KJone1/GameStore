import { Box, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import colors from "../styles/colors";

export default function TopGame(props: any) {
  return (
    <Box
      position="relative"
      top="50px"
      h="50vh"
      w="60vw"
      p={2}
      bg="#ffff"
      my="0px"
      _hover={{
        transform: "scale(1.1)",
        borderWidth: "4px",
        borderColor: `${colors.pink}`,
        borderRadius: "4px",
      }}
    >
      <NavLink
        to={{
          pathname: `/game/${props.src.results[0].id}`,
          state: {
            title: `${props.src.results[0].name}`,
            released: `${props.src.results[0].released}`,
            genres: props.src.results[0].genres,
            metacritic: `${props.src.results[0].metacritic}`,
            screenshots: props.src.results[0].short_screenshots,
          },
        }}
      >
        <Image
          borderRadius="2px"
          w="100%"
          h="100%"
          src={props.src.results[0].background_image}
          alt=""
          objectFit="cover"
        />
      </NavLink>
    </Box>
  );
}
