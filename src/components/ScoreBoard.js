import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from "../components/TopRow";
import Buttons from "./Buttons";

const ScoreBoard = () => {
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const awayScoreTouchdown = () => {
    setAwayScore(awayScore + 6);
  };

  const homeScoreTouchdown = () => {
    setHomeScore(homeScore + 6);
  };

  const awayScoreFieldgoal = () => {
    setAwayScore(awayScore + 3);
  };

  const homeScoreFieldgoal = () => {
    setHomeScore(homeScore + 3);
  };

  return (
    <div>
      <section className="scoreboard">
        <TopRow awayScore={awayScore} homeScore={homeScore} />
        <BottomRow />
      </section>
      <Buttons
        awayScoreTouchdown={awayScoreTouchdown}
        homeScoreTouchdown={homeScoreTouchdown}
        awayScoreFieldgoal={awayScoreFieldgoal}
        homeScoreFieldgoal={homeScoreFieldgoal}
      />
    </div>
  );
};

export default ScoreBoard;
