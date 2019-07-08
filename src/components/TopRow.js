import React from "react";
import Home from "./Home";
import Away from "./Away";
import Timer from "./Timer";

const TopRow = props => {
  console.log(props);
  return (
    <div className="topRow">
      <Home homeScore={props.homeScore} />
      <Timer />
      <Away awayScore={props.awayScore} />
    </div>
  );
};

export default TopRow;
