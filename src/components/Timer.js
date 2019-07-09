import React, { useState } from "react";

const Timer = () => {
  const [isTicking, setIsTicking] = useState(false);
  const [time, setTime] = useState(0);

  const handleClick = () => {
    if (isTicking) {
      clearInterval();
    } else {
      const startTime = Date.now() - time;
      setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
    }
    setIsTicking(!isTicking);
  };

  return (
    <div>
      <div className="timer">{time}</div>
      <button onClick={handleClick}>{isTicking ? "Stop" : "Start"}</button>
      <button>Reset</button>
    </div>
  );
};

export default Timer;
