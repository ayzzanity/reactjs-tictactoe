import { useContext } from "react";
import GameContext from "../context/game-context";

const Player = () => {
  const { playerToggle } = useContext(GameContext);
  return (
    <div>
      <h1>Current Player: {playerToggle ? `1 (X)` : `2 (O)`}</h1>
    </div>
  );
};

const GameNumber = () => {
  const { gameId } = useContext(GameContext);
  return (
    <div>
      <h1>Game #{gameId}</h1>
      <p style={{ margin: 0, textAlign: "center" }}>Best of 3</p>
      <GameResult />
    </div>
  );
};

const GameResult = () => {
  const { gameResult } = useContext(GameContext);
  return (
    <h2 style={{ textAlign: "center", marginTop: "10px", color: "green" }}>
      {gameResult}
    </h2>
  );
};
export { Player, GameNumber, GameResult };
