import { useContext } from "react";
import GameContext from "../context/game-context";

const Button = () => {
  const { restartGame, btnText } = useContext(GameContext);
  return (
    <div className="center-btn">
      <button className="btn" onClick={restartGame}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
