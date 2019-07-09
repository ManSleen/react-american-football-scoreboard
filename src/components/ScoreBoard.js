import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from "../components/TopRow";
import Buttons from "./Buttons";

const ScoreBoard = () => {
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [gameQuarter, setGameQuarter] = useState(1);

  const scoreHandler = (teamName, amountScored) => {
    if (teamName === "away") {
      setAwayScore(awayScore + amountScored);
    } else if (teamName === "home") {
      setHomeScore(homeScore + amountScored);
    }
  };

  const quarterHandler = type => {
    if (type === "increase") {
      if (gameQuarter < 4) {
        setGameQuarter(gameQuarter + 1);
      }
    } else if (type === "decrease") {
      if (gameQuarter > 1) {
        setGameQuarter(gameQuarter - 1);
      }
    }
  };

  return (
    <div>
      <section className="scoreboard">
        <TopRow awayScore={awayScore} homeScore={homeScore} />
        <BottomRow gameQuarter={gameQuarter} quarterHandler={quarterHandler} />
      </section>
      <Buttons scoreHandler={scoreHandler} />
    </div>
  );
};

export default ScoreBoard;
