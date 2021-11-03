import { useState } from "react";

const Goal = ({ pic, ball, teamsArray, indexState, rivalGoals, myGoals }) => {
  return (
    <div className="goal">
      <div>
        <div className="my-team"></div>
        <p className="score-paragraph">{myGoals + "-" + rivalGoals}</p>
        <div className={"enemy-team " + teamsArray[indexState]}></div>
      </div>
      <div className={"goalie " + pic}></div>
      <div className={"ball " + ball}></div>
    </div>
  );
};
export default Goal;
