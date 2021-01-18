import axios from "axios";
import React from "react";

const BASE_URL =
  "https://api.rawg.io/api/games?key=5c13465251ea47dcab0740521d5da4e8&dates=2020-01-01,2020-12-31&platforms=18&ordering=-rating&page=";

export default function Http(page: Number) {
  const [responseData, setResponseData] = React.useState<any>([]);

  React.useEffect(() => {
    axios
      .get(`${BASE_URL} + ${page}`)
      .then((response) => {
        setResponseData(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return responseData;
}
