import React, { useState } from "react";
import "../App.css";
import Standings from "../components/Standings";
import Leagues from "../components/Leagues";

const Content = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="content-container">
      <div className="tabs">
        <div className="tab-leagues" onClick={() => setActive(true)}>
          <h2 style={{ color: active ? "#80ffa0" : null }}>Leagues</h2>
        </div>
        <div className="tab-standings" onClick={() => setActive(false)}>
          <h2 style={{ color: !active ? "#80ffa0" : null }}>Standings</h2>
        </div>
      </div>

      {active ? (
        <Leagues />
      ) : (
        <Standings active={active} setActive={setActive} />
      )}
    </div>
  );
};

export default Content;
