import React, { useState, useEffect } from "react";
import axios from "axios";

const Standings = () => {
  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("39");
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    const fetchStandingsData = async () => {
      const cacheKey = `${selectedYear}_${selectedLeague}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        setData(JSON.parse(cachedData));
      } else {
        const options = {
          method: "GET",
          url: "https://api-football-v1.p.rapidapi.com/v3/standings",
          params: {
            season: selectedYear,
            league: selectedLeague,
          },
          headers: {
            "X-RapidAPI-Key":
              "b23efc87efmsh4d421d2bb3c60b4p1feb3cjsndde5ed41efb3",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);

          console.log(
            "API Response Data:",
            response.data.response[0].league.standings[0]
          );

          const newData = response.data.response[0].league.standings[0];
          setData(newData);

          localStorage.setItem(cacheKey, JSON.stringify(newData));
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchStandingsData();
  }, [selectedLeague, selectedYear]);

  return (
    <div className="standings-container">
      <div className="select-container">
        <div className="selects">
          <select
            name="select-league"
            id="select-league"
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
          >
            <option value="39">Premier League</option>
            <option value="61">Ligue 1</option>
            <option value="78">Bundesliga</option>
            <option value="135">Serie A</option>
            <option value="140">La Liga</option>
          </select>
          <select
            name="select-year"
            id="select-year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="standing-results">
          {data.map((team, index) => (
            <div key={index} className="standing-info-div">
              <h2>
                <span>
                  {`${team.rank}.`}
                  <img src={team.team.logo} alt={team.team.name} />
                  {team.team.name}
                </span>
              </h2>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Standings;
