import GamePlay from "./components/GamePlay";
import NumberSelector from "./components/NumberSelector";
import RoleDice from "./components/RoleDice";
import Rules from "./components/Rules";
import StartGame from "./components/StartGame";
import TotalScore from "./components/TotalScore";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
  }

export default App;