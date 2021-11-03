const GameOver = ({ totalScore, resetgame, indexState, myGoals }) => {
  console.log(indexState, "index", myGoals, "goals");
  return (
    <div className="game-over">
      {totalScore < 5 ? (
        <>
          <p>You seem disappointed</p>
          <p>You tried your best</p>
        </>
      ) : totalScore < 30 ? (
        <p>Good effort!</p>
      ) : (
        <p>Great game!</p>
      )}
      <p>You Answered {totalScore} Questions correctly</p>

      {indexState >= 35 && myGoals >= 2 ? (
        <>
          <div className="trophy"></div>
          <p>You are the champion</p>
        </>
      ) : (
        ""
      )}
      <input type="button" value="Main menu" onClick={resetgame} />
    </div>
  );
};
export default GameOver;
