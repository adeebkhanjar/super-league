import { useState } from "react";

const Goal = ({ pic, ball }) => {
  return (
    <div className="goal">
      <div className={"goalie " + pic}></div>
      <div className={"ball " + ball}></div>
    </div>
  );
};
export default Goal;
