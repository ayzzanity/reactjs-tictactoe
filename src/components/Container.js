import { useContext } from "react";
import GameContext from "../context/game-context";
import Box from "./Box";

const Container = () => {
  const { GameArray, toggleMove } = useContext(GameContext);

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <Box
          onClick={toggleMove}
          id={GameArray[0].id}
          move={GameArray[0].move}
        />
        <Box
          onClick={toggleMove}
          id={GameArray[1].id}
          move={GameArray[1].move}
        />
        <Box
          onClick={toggleMove}
          id={GameArray[2].id}
          move={GameArray[2].move}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Box
          onClick={toggleMove}
          id={GameArray[3].id}
          move={GameArray[3].move}
        />
        <Box
          onClick={toggleMove}
          id={GameArray[4].id}
          move={GameArray[4].move}
        />
        <Box
          onClick={toggleMove}
          id={GameArray[5].id}
          move={GameArray[5].move}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Box
          onClick={toggleMove}
          id={GameArray[6].id}
          move={GameArray[6].move}
        />
        <Box
          onClick={toggleMove}
          id={GameArray[7].id}
          move={GameArray[7].move}
        />
        <Box
          onClick={toggleMove}
          id={GameArray[8].id}
          move={GameArray[8].move}
        />
      </div>
    </div>
  );
};

export default Container;
