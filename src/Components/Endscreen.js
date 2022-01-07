import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/Questionbank";
import { newValue } from "./Mainmenu";

import axios from "axios";
function Endscreen() {
  const { score, setScore, setgameState, semester, username } =
    useContext(QuizContext);
  const resetQuiz = () => {
    setScore(0);
    setgameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {newValue}
      </h3>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Endscreen;
