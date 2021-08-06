import { useContext } from "react";
import Container from "./components/Container";
import GameLog from "./components/GameLog";
import Header from "./components/Header";
import { Player, GameNumber } from "./components/GameInfo";
import GameContext from "./context/game-context";
import "./index.css";
import Button from "./components/Button";

function App() {
  const { gameStatus } = useContext(GameContext);
  return (
    <>
      <Header />
      <div className="row">
        <Container />
        <GameNumber />
        <GameLog />
      </div>
      {gameStatus ? <Player /> : <Button />}
    </>
  );
}

export default App;
