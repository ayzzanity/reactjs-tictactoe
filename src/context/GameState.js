import { useState, useEffect } from "react";
import GameContext from "./game-context";

const GameStateProvider = (props) => {
  const [GameArray, setGameArray] = useState([
    { id: "1", move: "", player: "" },
    { id: "2", move: "", player: "" },
    { id: "3", move: "", player: "" },
    { id: "4", move: "", player: "" },
    { id: "5", move: "", player: "" },
    { id: "6", move: "", player: "" },
    { id: "7", move: "", player: "" },
    { id: "8", move: "", player: "" },
    { id: "9", move: "", player: "" },
  ]);
  const [playerToggle, setPlayerToggle] = useState(true); // true is p1 - x, false is p2 - o
  const [gameId, setGameId] = useState(1);
  const [gameScore, setGameScore] = useState({ p1: "0", p2: "0" });
  const [gameStatus, setGameStatus] = useState(true);
  const [gameResult, setGameResult] = useState("");
  const [btnText, setBtnText] = useState("NEXT GAME");

  //useEffect
  useEffect(() => {
    checking();
    checkPoints();
  }, [GameArray]);

  //clear game function
  function clearGame() {
    setGameArray([
      { id: "1", move: "", player: "" },
      { id: "2", move: "", player: "" },
      { id: "3", move: "", player: "" },
      { id: "4", move: "", player: "" },
      { id: "5", move: "", player: "" },
      { id: "6", move: "", player: "" },
      { id: "7", move: "", player: "" },
      { id: "8", move: "", player: "" },
      { id: "9", move: "", player: "" },
    ]);
  }
  //player toggle function
  function toggleMove(e) {
    if (e.target.innerText === "" && gameStatus) {
      if (playerToggle) {
        setGameArray(
          GameArray.map((box) =>
            box.id === e.target.id ? { ...box, move: "X", player: "1" } : box
          )
        );
      } else {
        setGameArray(
          GameArray.map((box) =>
            box.id === e.target.id ? { ...box, move: "O", player: "2" } : box
          )
        );
      }
      setPlayerToggle(!playerToggle);
    } else {
      console.log("Already entered");
    }
  }

  //checking function
  function checking() {
    if (GameArray.some((game) => game.move === "")) {
      compareBoxes();
    } else {
      setGameStatus(false);
      setGameResult("DRAW!");
      setPlayerToggle(playerToggle);
      compareBoxes();
    }
  }
  //box comparison function
  function compareBoxes() {
    if (GameArray[4].move !== "") {
      if (
        (GameArray[4].move === GameArray[3].move &&
          GameArray[4].move === GameArray[5].move) ||
        (GameArray[4].move === GameArray[1].move &&
          GameArray[4].move === GameArray[7].move) ||
        (GameArray[4].move === GameArray[0].move &&
          GameArray[4].move === GameArray[8].move) ||
        (GameArray[4].move === GameArray[2].move &&
          GameArray[4].move === GameArray[6].move)
      ) {
        setGameStatus(false);
        announceWinner(4);
      }
    }
    if (GameArray[1].move !== "") {
      if (
        GameArray[1].move === GameArray[0].move &&
        GameArray[1].move === GameArray[2].move
      ) {
        setGameStatus(false);
        announceWinner(1);
      }
    }
    if (GameArray[3].move !== "") {
      if (
        GameArray[3].move === GameArray[0].move &&
        GameArray[3].move === GameArray[6].move
      ) {
        setGameStatus(false);
        announceWinner(3);
      }
    }
    if (GameArray[5].move !== "") {
      if (
        GameArray[5].move === GameArray[2].move &&
        GameArray[5].move === GameArray[8].move
      ) {
        setGameStatus(false);
        announceWinner(5);
      }
    }
    if (GameArray[7].move !== "") {
      if (
        GameArray[7].move === GameArray[6].move &&
        GameArray[7].move === GameArray[8].move
      ) {
        setGameStatus(false);
        announceWinner(7);
      }
    }
  }
  //winner function
  function announceWinner(index) {
    if (GameArray[index].move === "X") {
      setPlayerToggle(false);
      setGameScore({
        ...gameScore,
        p1: `${parseInt(gameScore.p1) + 1}`,
      });
      setGameResult("Player 1 wins!");
    } else if (GameArray[index].move === "O") {
      setPlayerToggle(true);
      setGameScore({
        ...gameScore,
        p2: `${parseInt(gameScore.p2) + 1}`,
      });
      setGameResult("Player 2 wins!");
    }
  }
  //checkpoints function
  function checkPoints() {
    if (
      gameScore.p1 === "2" ||
      (gameId === "RESULT" && gameScore.p1 > gameScore.p2)
    ) {
      setGameResult("CHAMPION: PLAYER 1");
      setGameStatus(false);
      setBtnText("PLAY AGAIN");
      setGameId("RESULT");
    } else if (
      gameScore.p2 === "2" ||
      (gameId === "RESULT" && gameScore.p1 < gameScore.p2)
    ) {
      setGameResult("CHAMPION: PLAYER 2");
      setGameStatus(false);
      setBtnText("PLAY AGAIN");
      setGameId("RESULT");
    } else if (gameId === "RESULT" && gameScore.p1 === gameScore.p2) {
      setGameResult("RESULT: DRAW!");
      setGameStatus(false);
    }
  }
  //restart/next game function
  function restartGame() {
    if (gameId === 2) {
      setBtnText("VIEW RESULT");
    } else {
      setBtnText("NEXT GAME");
    }

    if (btnText === "NEXT GAME") {
      setGameId(gameId + 1);
    } else if (btnText === "VIEW RESULT") {
      setGameStatus(false);
      setGameId("RESULT");
      setBtnText("PLAY AGAIN");
    } else {
      setGameScore({ ...gameScore, p1: "0", p2: "0" });
      setPlayerToggle(true);
      setGameId(1);
    }
    clearGame();
    setGameStatus(true);
    setGameResult("");
  }
  return (
    <GameContext.Provider
      value={{
        GameArray,
        gameId,
        setGameArray,
        playerToggle,
        toggleMove,
        checking,
        gameScore,
        gameStatus,
        restartGame,
        btnText,
        gameResult,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameStateProvider;
