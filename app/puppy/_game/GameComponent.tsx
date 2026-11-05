import React, { useEffect } from "react";
import { destroyGame, startGame } from "@/lib/game";

const GameComponent = () => {
  useEffect(() => {
    startGame();
    return () => {
      destroyGame();
    };
  }, []);

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
      <a
        href="/personvern"
        className="absolute bottom-2 right-3 text-xs text-purple-900/50 hover:text-purple-900"
      >
        Personvern
      </a>
    </div>
  );
};

export default GameComponent;
