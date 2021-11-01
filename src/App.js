import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Goal from "./goalComponent";
import MathComp from "./mathComponent";

function App() {
  const [pic, setPic] = useState("friend");
  const [ball, setBall] = useState(null);
  const [dataState, setDataState] = useState(null);
  const getQuestions = async () => {
    try {
      const result = await axios.get(
        "https://raw.githubusercontent.com/adeebkhanjar/Dad-Jokes-API/main/api.json"
      );
      setDataState(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className="App">
      <Goal pic={pic} ball={ball} />
      <MathComp />
    </div>
  );
}

export default App;
