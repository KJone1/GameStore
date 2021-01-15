import React from "react";
import "./App.css";
import http from "../axios";
import Grid from "../components/simpleGrid";
import TopGame from "../components/topGame";
import Spinner from "../components/spinner";
import { Heading } from "@chakra-ui/react";

function PageLayout({ match }: any) {
  const httpCall = http(match.params.id);

  if (httpCall.length !== 0) {
    return (
      <>
        {match.isExact && (
          <>
            <div className="App">
              <header className="App-header">
                <Heading size="2xl" color="#ff165d" pt={4}>
                  Shop
                </Heading>
                <TopGame src={httpCall} match={match} />
                <Grid src={httpCall} match={match} />
              </header>
            </div>
          </>
        )}
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default PageLayout;

// "https://preview.redd.it/1iwcit1gidyy.jpg?auto=webp&s=2e7883b8b95e0d5ed00e66d862992b618b8a3796"
