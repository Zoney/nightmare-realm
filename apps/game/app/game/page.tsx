"use client";
import { dir } from "console";
import React from "react";

interface GamePageProps {
  game: string;
}

const GamePage: React.FC<GamePageProps> = ({ game }) => {
  const [ballY, setBallY] = React.useState<number>(0);
  const [isMovingUp, setIsMovingUp] = React.useState<boolean>(false);
  const [isMovingDown, setIsMovingDown] = React.useState<boolean>(false);
  const [direction, setDirection] = React.useState<number>(0);
  const [imageX, setImageX] = React.useState(window.innerHeight);
  const [imageY, setImageY] = React.useState(
    Math.random() * window.innerHeight,
  );
  const image = new Image();
  image.src = "./puppy1.png";

  React.useEffect(() => {
    const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    setImageX(canvas.width); // Set the initial x-coordinate to the right edge of the canvas

    const gameLoop = () => {
      // Update game state

      // Move the green ball up and down
      let newY = ballY;
      newY += direction;
      // if (isMovingUp) {
      //   newY -= 1;
      // } else if (isMovingDown) {
      //   newY += 1;
      // }
      if (newY < 0) {
        newY = canvas.height;
      } else if (newY > canvas.height) {
        newY = 0;
      }
      setBallY(newY);
      const imageWidth = canvas.width / 10; // Set the width to 1/10 of the canvas width
      const imageHeight = image.height * (imageWidth / image.width); // Scale the height to maintain the aspect ratio

      // Render game
      if (ctx) {
       
        const puppyBox = {
          x: imageX,
          y: imageY,
          width: imageWidth,
          height: imageHeight,
        };
        const ballWidth = 50; // Declare and assign a value to the ballWidth variable

        const ballHeight = 50; // Declare and assign a value to the ballHeight variable
        const ballX = canvas.width / 2; // Declare and assign a value to the ballX variable
        const ballBox = {
          x: ballX,
          y: ballY,
          width: ballWidth,
          height: ballHeight,
        };
        // Check for collision
        if (
          puppyBox.x < ballBox.x + ballBox.width &&
          puppyBox.x + puppyBox.width > ballBox.x &&
          puppyBox.y < ballBox.y + ballBox.height &&
          puppyBox.y + puppyBox.height > ballBox.y
        ) {
          // Collision detected
          ctx.font = "30px Arial";
          ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
          return; // Stop the game loop
        }
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(canvas.width / 2, ballY, 50, 0, 2 * Math.PI);
        ctx.fill();

        setImageX(imageX - 5); // Move the image 5 pixels to the left

        if (imageX + image.width < 0) {
          setImageX(canvas.width); // If the image has completely moved off the canvas, move it back to the right edge
          setImageY(Math.random() * canvas.height); // Generate a new random y-coordinate
        }
        
        ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight); // Draw the image at the current y-coordinate

        setImageX(imageX - 1); // Move the image 5 pixels to the left

        if (imageX + image.width < 0) {
          setImageX(canvasWidth); // If the image has completely moved off the canvas, move it back to the right edge
        }
      }

      if (isMovingUp || isMovingDown) {
        requestAnimationFrame(gameLoop);
      }
    };

    gameLoop();
  }, [ballY, isMovingUp, isMovingDown, direction, imageX]);

  const handleButton1Click = () => {
    setDirection(-1);
  };

  const handleButton2Click = () => {
    setDirection(1);
  };

  const handleButtonRelease = () => {
    setDirection(0);
  };

  // In your game loop
  // Update the ball's position based on the speed

  const buttonHeight = 50; // Approximate height of a button
  const margin = 20; // Margin for visual spacing
  const totalButtonHeight = 2 * buttonHeight + 2 * margin; // Total height taken by two buttons and margins

  const canvasWidth = window.innerWidth;
  const canvasHeight =
    window.innerHeight - totalButtonHeight > 0
      ? window.innerHeight - totalButtonHeight
      : 0;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">{game}</h1>

      <canvas
        id="game-canvas"
        className="max-w-full"
        width={canvasWidth}
        height={canvasHeight}
      />
      <div className="flex">
        <button
          className="mr-2"
          onMouseDown={handleButton1Click}
          onMouseUp={handleButtonRelease}
        >
          Button 1
        </button>
        <button
          onMouseDown={handleButton2Click}
          onMouseUp={handleButtonRelease}
        >
          Button 2
        </button>
      </div>
    </div>
  );
};

export default GamePage;
