import colors from "../styles/colors";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  AspectRatio,
  Image,
  Icon,
} from "@chakra-ui/react";
import { useLocation, useHistory } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { Redirect } from "react-router-dom";
interface ILocation {
  title: string;
  released: string;
  metacritic: string;
  genres: any;
  screenshots: any;
}

export default function InfoPage(props: any) {
  let locations = useLocation<ILocation>();
  let history = useHistory();

  try {
    return (
      <>
        {props.match.isExact && (
          <>
            <Flex
              textAlign="start"
              h="100vh"
              bgColor={colors.grey}
              flexDirection="column"
            >
              <Button
                variant="outline"
                w="60px"
                h="35px"
                display="relative"
                mt="40px"
                ml={"10%"}
                color="grey"
                borderColor=""
                _hover={{
                  color: "black",
                  bg: "#ebedf0",
                }}
                _active={{
                  bg: "#dddfe2",
                  transform: "scale(0.95)",
                  borderColor: "#bec3c9",
                }}
                _focus={{
                  boxShadow: "0 0 0 3px#ff165d",
                  color: "white",
                }}
                onClick={() => history.goBack()}
              >
                <Icon as={BsArrowLeftShort} w="25px" h="30px" />
              </Button>
              <Heading
                size="lg"
                color="white"
                fontWeight="500"
                display="relative"
                mt={"13%"}
                ml={"10%"}
                mb={4}
              >
                {locations.state.title}
              </Heading>

              <Stack direction="row" spacing={4} ml={"10%"}>
                {locations.state.genres.map((array: any) => (
                  <Text color="grey">{array.name} </Text>
                ))}
                <Text color="grey">{locations.state.released.slice(0, 4)}</Text>
                <Box>
                  {!!locations.state.metacritic ? (
                    <Text color="grey">{`Score: ${locations.state.metacritic}%`}</Text>
                  ) : (
                    <Text color="grey">No Metacritic Score :(</Text>
                  )}
                </Box>
              </Stack>
              <Stack direction="row" spacing={6} ml={"10%"} mt={12}>
                {locations.state.screenshots.slice(1, 5).map((array: any) => (
                  <AspectRatio w="16vw" h="8vw" ratio={16 / 9}>
                    <Image
                      borderRadius="3px"
                      src={array.image}
                      alt=""
                      objectFit="cover"
                    />
                  </AspectRatio>
                ))}
              </Stack>
            </Flex>
          </>
        )}
      </>
    );
  } catch (error) {
    return <Redirect to="/error" />;
  }
}
