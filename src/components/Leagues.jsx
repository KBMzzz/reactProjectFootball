import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Leagues = () => {
  const [leaguesData, setLeaguesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
        headers: {
          "X-RapidAPI-Key":
            "b23efc87efmsh4d421d2bb3c60b4p1feb3cjsndde5ed41efb3",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setLeaguesData(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Filter leaguesData to include only the 5 specific leagues
  const filteredLeaguesData = leaguesData.filter((leagueData) =>
    [61, 39, 135, 140, 78].includes(leagueData.league.id)
  );

  return (
    <div className="league-container">
      <div className="leaguetr">
        {filteredLeaguesData.map((leagueData) => (
          <div key={leagueData.league.id} className="league-div">
            <img
              src={leagueData.league.logo}
              alt={`Logo of ${leagueData.league.name}`}
            />
            <p>{leagueData.league.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leagues;
