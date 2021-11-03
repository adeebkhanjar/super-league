const GameOver = ({ totalScore, resetgame, indexState, myGoals, lang }) => {
  return (
    <div className="game-over">
      {totalScore < 5 ? (
        <>
          <p>{lang ? "You seem disappointed" : "אל תהיה מאוכזב"}</p>
          <p>{lang ? "You tried your best" : "נסית את מיטבך"}</p>
        </>
      ) : totalScore < 30 ? (
        <p>{lang ? "Good effort!" : "כל הכבוד על המאמץ"}</p>
      ) : (
        <p>{lang ? "Great game!" : "משחק מדהים"}</p>
      )}
      <p>
        {lang
          ? `You Answered ${totalScore} Questions correctly`
          : `השבת על ${totalScore} שאלות נכונות`}
      </p>

      {indexState >= 35 && myGoals >= 2 ? (
        <>
          <div className="trophy"></div>
          <p>{lang ? "You are the champion" : "זכית באליפות"}</p>
        </>
      ) : (
        ""
      )}
      <input
        type="button"
        value={lang ? "Main menu" : "חזור"}
        onClick={resetgame}
      />
    </div>
  );
};
export default GameOver;
