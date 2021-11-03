import "./App.css";
import { useEffect, useState } from "react";
import Goal from "./goalComponent";
import MathComp from "./mathComponent";
import Landing from "./landingComponent";
import { questionsData } from "./dataSheet";
import { teamsArray } from "./dataSheet";
import GameOver from "./gameOverComponent";
function App() {
  const [pic, setPic] = useState("");
  const [ball, setBall] = useState("");
  const [hide, setHide] = useState("");
  const [indexState, setIndexState] = useState(0);
  const [myGoals, setMyGoals] = useState(0);
  const [rivalGoals, setRivalGoals] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const resetGame = () => {
    setPic("");
    setBall("");
    setHide("");
    setIndexState(0);
    setMyGoals(0);
    setRivalGoals(0);
    setGameOver(false);
    setTotalScore(0);
  };
  const setAnimation = (a1, a2) => {
    setBall(a1);
    setPic(a2);
    setTimeout(() => {
      setBall("");
      setPic("");
    }, 3000);
  };
  useEffect(() => {
    if (indexState >= 35 && myGoals >= 2) {
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    } else if (myGoals + rivalGoals >= 3) {
      setTimeout(() => {
        setMyGoals(0);
        setRivalGoals(0);
      }, 3000);
    }
    if (myGoals + rivalGoals >= 3 && rivalGoals >= 2) {
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    }
    //eslint-disable-next-line
  }, [myGoals, rivalGoals]);

  return (
    <div className="App">
      <Landing
        hide={hide}
        setHide={() => {
          setHide("hide");
        }}
      />
      <Goal
        pic={pic}
        ball={ball}
        teamsArray={teamsArray}
        indexState={indexState}
        myGoals={myGoals}
        rivalGoals={rivalGoals}
      />
      <MathComp
        indexState={indexState}
        setIndexState={(a) => {
          setIndexState(a);
        }}
        setYourScore={(a) => {
          setMyGoals(a);
        }}
        setRivalScore={(a) => {
          setRivalGoals(a);
        }}
        myGoals={myGoals}
        rivalGoals={rivalGoals}
        teamsArray={teamsArray}
        question={questionsData}
        setAnimation={(a1, a2) => {
          setAnimation(a1, a2);
        }}
        totalScore={totalScore}
        setTotalScore={(a) => {
          setTotalScore(a);
        }}
      />
      {gameOver ? (
        <GameOver
          indexState={indexState}
          myGoals={myGoals}
          totalScore={totalScore}
          resetgame={() => {
            resetGame();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
