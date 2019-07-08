import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from "../components/TopRow";
import Buttons from "./Buttons";

const ScoreBoard = () => {
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const scoreHandler = (teamName, amountScored) => {
    if (teamName === "away") {
      setAwayScore(awayScore + amountScored);
    } else if (teamName === "home") {
      setHomeScore(homeScore + amountScored);
    }
  };

  return (
    <div>
      <section className="scoreboard">
        <TopRow awayScore={awayScore} homeScore={homeScore} />
        <BottomRow />
      </section>
      <Buttons scoreHandler={scoreHandler} />
    </div>
  );
};

export default ScoreBoard;
