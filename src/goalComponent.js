const Goal = ({
  pic,
  ball,
  teamsArray,
  indexState,
  rivalGoals,
  myGoals,
  ball3,
}) => {
  return (
    <div className="goal">
      <div>
        <div className="my-team"></div>
        <p className="score-paragraph">{myGoals + "-" + rivalGoals}</p>
        <div className={"enemy-team " + teamsArray[indexState]}></div>
      </div>
      <div className={"goalie " + pic}></div>
      <div className={ball3 + " ball " + ball}></div>
    </div>
  );
};
export default Goal;
