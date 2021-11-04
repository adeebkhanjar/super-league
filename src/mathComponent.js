import { useState } from "react";
import cheer from "./sound/cheer.wav";
import kick from "./sound/kick.wav";
import cricket from "./sound/cricket.wav";
const MathComp = ({
  question,
  setAnimation,
  teamsArray,
  indexState,
  setIndexState,
  myGoals,
  rivalGoals,
  setYourScore,
  setRivalScore,
  setTotalScore,
  totalScore,
  lang,
  streak,
}) => {
  const [answer, setAnswer] = useState(null);
  const [announcement, setAnnouncement] = useState(null);

  const checkAnswer = () => {
    new Audio(kick).play();
    if (answer === question[indexState].a) {
      new Audio(cheer).play();
      setAnimation("ball2", "rival");
      setAnnouncement(lang ? "your" : "הבקעת");
      setYourScore(myGoals + 1);
      setTotalScore(totalScore + 1);
    } else {
      new Audio(cricket).play();
      setAnimation("ball2", "friend");
      setAnnouncement(lang ? `${teamsArray[indexState]}'s` : "ספגת");
      setRivalScore(rivalGoals + 1);
    }
    setAnswer(null);
    setTimeout(() => {
      setAnnouncement(null);
      setIndexState(indexState + 1);
    }, 3000);
  };
  return (
    <div className="math">
      <p className="float">streak: {streak}</p>
      <div>
        {question && !announcement ? (
          <div>
            {" "}
            <p>{question[indexState].q}</p>
            <input
              type="text"
              placeholder={
                lang ? "Enter the correct number..." : "תקליד את המספר הנכון"
              }
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  checkAnswer();
                }
              }}
            />
            <input
              type="button"
              value={lang ? "shoot" : "בעט"}
              onClick={checkAnswer}
            />
          </div>
        ) : (
          <span className="announcement">
            {announcement}
            <p className="announcement">{lang ? "Goal" : "שער"}</p>
          </span>
        )}
      </div>
    </div>
  );
};
export default MathComp;
