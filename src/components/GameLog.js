import { useContext } from "react";
import GameContext from "../context/game-context";
import Moves from "./Moves";

const GameLog = () => {
  const { GameArray, gameScore } = useContext(GameContext);
  return (
    <div className="log">
      <h1 style={{ textAlign: "left" }}>Move List</h1>
      <h4>
        Scores: [Player #1 - {gameScore.p1}] [Player #2 - {gameScore.p2}]
      </h4>
      <div>
        {GameArray.map((game) => {
          if (game.move !== "")
            return (
              <Moves
                key={game.id}
                id={game.id}
                move={game.move}
                player={game.player}
              />
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default GameLog;
