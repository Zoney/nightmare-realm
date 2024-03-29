import React, { useEffect } from "react";
import { destroyGame, startGame } from "@repo/phaser-game/src/game";

const GameComponent = () => {
  let gameStarted = false;

  useEffect(() => {
    if (!gameStarted) {
      startGame();
      gameStarted = true;
    }
    return () => {
      destroyGame();
      gameStarted = false;
    };
  }, [gameStarted]);

  return (
    <div
      className="bg-pink-100"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="phaser-game" />
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "purple",
          textShadow: "2px 2px 4px #ff00ff",
          animation: "flashyText 1s infinite",
        }}
      >
        Jump, Puppy!
      </p>
    </div>
  );
};

export default GameComponent;
