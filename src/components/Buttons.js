import React from "react";

const Buttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button
          onClick={() => props.scoreHandler("home", 6)}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={() => props.scoreHandler("home", 3)}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={() => props.scoreHandler("away", 6)}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={() => props.scoreHandler("away", 3)}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
