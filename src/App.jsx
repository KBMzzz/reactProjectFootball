import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    const apiFootballUrl =
      "https://soccer-football-info.p.rapidapi.com/players/view/";
    const apiFootballParams = { i: "1", l: "en_US" };
    const apiFootballHeaders = {
      "X-RapidAPI-Key": "b23efc87efmsh4d421d2bb3c60b4p1feb3cjsndde5ed41efb3",
      "X-RapidAPI-Host": "soccer-football-info.p.rapidapi.com",
    };

    axios
      .get(apiFootballUrl, {
        params: apiFootballParams,
        headers: apiFootballHeaders,
      })
      .then((footballResponse) => {
        console.log(footballResponse.data.response);
      })
      .catch((error) => {
        console.error("API Football request error:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

// const url =
//   "https://soccer-football-info.p.rapidapi.com/players/view/";
// const options = {
//   method: "GET",
// params: { i: "1", l: "en_US" },
//   headers: {
//     "X-RapidAPI-Key": "b23efc87efmsh4d421d2bb3c60b4p1feb3cjsndde5ed41efb3",
//     "X-RapidAPI-Host": "soccer-football-info.p.rapidapi.com",
//   },
// };

// fetch(url, options)
//   .then((res) => {
//     return res.json();
//   })
//   .then((jsonData) => {
//     console.log(jsonData.response);
//   });

// const options = {
//   method: "GET",
//   url: "https://soccer-football-info.p.rapidapi.com/players/view/",
//   params: { i: "1", l: "en_US" },
//   headers: {
//     "X-RapidAPI-Key": "b23efc87efmsh4d421d2bb3c60b4p1feb3cjsndde5ed41efb3",
//     "X-RapidAPI-Host": "soccer-football-info.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
