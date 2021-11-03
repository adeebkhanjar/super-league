import { useEffect, useState } from "react";
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
}) => {
  const [answer, setAnswer] = useState(null);
  const [announcement, setAnnouncement] = useState(null);

  const checkAnswer = () => {
    new Audio(kick).play();
    if (answer === question[indexState].a) {
      new Audio(cheer).play();
      setAnimation("ball2", "rival");
      setAnnouncement("your");
      setYourScore(myGoals + 1);
      setTotalScore(totalScore + 1);
    } else {
      new Audio(cricket).play();
      setAnimation("ball2", "friend");
      setAnnouncement(`${teamsArray[indexState]}'s`);
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
      <p>
        {question && !announcement ? (
          <div>
            {" "}
            <p>{question[indexState].q}</p>
            <input
              type="text"
              placeholder="Enter the correct number..."
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  checkAnswer();
                }
              }}
            />
            <input type="button" value="submit" onClick={checkAnswer} />
          </div>
        ) : (
          <span className="announcement">
            {announcement}
            <p className="announcement">Goal</p>
          </span>
        )}
      </p>
    </div>
  );
};
export default MathComp;
