import React, { useEffect, useState } from "react";
import "./App.css";

const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const CAR_WIDTH = 50;
const CAR_HEIGHT = 80;

function App() {
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - CAR_WIDTH / 2);
  const [enemyY, setEnemyY] = useState(-100);
  const [enemyX, setEnemyX] = useState(Math.random() * (GAME_WIDTH - CAR_WIDTH));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Move player with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(prev - 20, 0));
      }
      if (e.key === "ArrowRight") {
        setPlayerX((prev) =>
          Math.min(prev + 20, GAME_WIDTH - CAR_WIDTH)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setEnemyY((prev) => {
        if (prev > GAME_HEIGHT) {
          setEnemyX(Math.random() * (GAME_WIDTH - CAR_WIDTH));
          return -CAR_HEIGHT;
        }
        return prev + 10;
      });

      setScore((prev) => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    if (
      enemyY + CAR_HEIGHT > GAME_HEIGHT - CAR_HEIGHT &&
      enemyX < playerX + CAR_WIDTH &&
      enemyX + CAR_WIDTH > playerX
    ) {
      setGameOver(true);
    }
  }, [enemyX, enemyY, playerX]);

  const restartGame = () => {
    setPlayerX(GAME_WIDTH / 2 - CAR_WIDTH / 2);
    setEnemyY(-100);
    setEnemyX(Math.random() * (GAME_WIDTH - CAR_WIDTH));
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <h1>🚗 React Car Game</h1>
      <div className="road">
        <div
          className="car player"
          style={{ left: playerX, bottom: 20 }}
        />
        <div
          className="car enemy"
          style={{ left: enemyX, top: enemyY }}
        />
      </div>

      <h2>Score: {score}</h2>

      {gameOver && (
        <div className="game-over">
          <h2>💥 Game Over</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;