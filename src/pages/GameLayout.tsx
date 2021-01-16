import colors from "../styles/colors";
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

interface ILocation {
  title: any;
  released: any;
  esrb: any;
  metacritic: any;
}
export default function InfoPage(props: any) {
  let locations = useLocation<ILocation>();

  return (
    <>
      {props.match.isExact && (
        <>
          <Flex
            textAlign="center"
            h="100vh"
            bgColor={colors.grey}
            flexDirection="column"
            alignItems="center"
          >
            <h1>{locations.state.title}</h1>
            <h1>{locations.state.metacritic}</h1>
            <h1>{locations.state.released}</h1>
          </Flex>
        </>
      )}
    </>
  );
}
