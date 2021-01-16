import React from "react";

import http from "../axios";
import Grid from "../components/simpleGrid";
import TopGame from "../components/topGame";
// import Spinner from "../components/spinner";
import { Flex, Heading } from "@chakra-ui/react";
import colors from "../styles/colors";
import LoadingScreen from "../components/loadingScreen";

function PageLayout({ match }: any) {
  const httpCall = http(match.params.id);

  if (httpCall.length !== 0) {
    return (
      <>
        {match.isExact && (
          <>
            <Flex
              textAlign="center"
              h="200vh"
              bgColor={colors.grey}
              flexDirection="column"
              alignItems="center"
            >
              <Heading size="2xl" color={colors.pink} pt={4}>
                Shop
              </Heading>
              <TopGame src={httpCall} match={match} />
              <Grid src={httpCall} match={match} />
            </Flex>
          </>
        )}
      </>
    );
  } else {
    return <LoadingScreen />;
  }
}

export default PageLayout;

// "https://preview.redd.it/1iwcit1gidyy.jpg?auto=webp&s=2e7883b8b95e0d5ed00e66d862992b618b8a3796"
