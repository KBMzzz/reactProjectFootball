import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Leagues = () => {
  const [leaguesData, setLeaguesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem("leaguesData");

      if (cachedData) {
        setLeaguesData(JSON.parse(cachedData));
      } else {
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

          localStorage.setItem(
            "leaguesData",
            JSON.stringify(response.data.response)
          );
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  const filteredLeaguesData = leaguesData.filter((leagueData) =>
    [61, 39, 135, 140, 78].includes(leagueData.league.id)
  );

  const leaguesWithLinks = [
    { id: 61, name: "Ligue 1", link: "https://www.ligue1.com/" },
    {
      id: 39,
      name: "Premier League",
      link: "https://www.premierleague.com/",
    },
    {
      id: 135,
      name: "Bundesliga",
      link: "https://www.bundesliga.com/en/bundesliga",
    },
    { id: 140, name: "Serie A", link: "https://www.legaseriea.it/en" },
    {
      id: 78,
      name: "La Liga",
      link: "https://www.laliga.com/en-GB",
    },
  ];

  return (
    <div className="league-container">
      <div className="leaguetr">
        {filteredLeaguesData.map((leagueData, index) => (
          <a
            href={leaguesWithLinks[index].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div key={leagueData.league.id} className="league-div">
              <img
                src={leagueData.league.logo}
                alt={`Logo of ${leagueData.league.name}`}
              />
              <p>{leagueData.league.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Leagues;
