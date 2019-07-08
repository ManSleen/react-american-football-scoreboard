import React from "react";

const Buttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button
          onClick={props.homeScoreTouchdown}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={props.homeScoreFieldgoal}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={props.awayScoreTouchdown}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={props.awayScoreFieldgoal}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
