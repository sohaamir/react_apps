import React, { useState, useEffect } from 'react';
import neonWallpaper from './neon_wallpaper.gif';

const SnakeGame = () => {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [speedBoost, setSpeedBoost] = useState(null);
  const [direction, setDirection] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!gameOver) {
        switch (event.key) {
          case 'ArrowUp':
            setDirection('up');
            setIsGameStarted(true);
            break;
          case 'ArrowDown':
            setDirection('down');
            setIsGameStarted(true);
            break;
          case 'ArrowLeft':
            setDirection('left');
            setIsGameStarted(true);
            break;
          case 'ArrowRight':
            setDirection('right');
            setIsGameStarted(true);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameOver]);

  useEffect(() => {
    if (isGameStarted) {
      const interval = setInterval(() => {
        if (!gameOver) {
          updateSnake();
        }
      }, 100 / (1 + score * 0.1));
      return () => clearInterval(interval);
    }
  }, [snake, food, direction, gameOver, isGameStarted, score]);

  const updateSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0].slice();
    switch (direction) {
      case 'up':
        head[1] -= 1;
        break;
      case 'down':
        head[1] += 1;
        break;
      case 'left':
        head[0] -= 1;
        break;
      case 'right':
        head[0] += 1;
        break;
      default:
        break;
    }
    newSnake.unshift(head);
    if (food && head[0] === food[0] && head[1] === food[1]) {
      setScore(score + 1);
      const isGoldCircle = Math.random() < 0.2; // 20% chance of getting a gold circle
      if (isGoldCircle) {
        setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
      } else {
        setFood(null);
        setSpeedBoost([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
      }
    } else if (speedBoost && head[0] === speedBoost[0] && head[1] === speedBoost[1]) {
      setSpeedBoost(null);
      setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
    } else {
      newSnake.pop();
    }
    if (
      head[0] < 0 ||
      head[0] >= 20 ||
      head[1] < 0 ||
      head[1] >= 20 ||
      (newSnake.length > 1 && newSnake[1][0] === head[0] && newSnake[1][1] === head[1])
    ) {
      setGameOver(true);
      setIsGameStarted(false);
    } else {
      setSnake(newSnake);
    }
  };

  const startNewGame = () => {
    setSnake([[5, 5]]);
    setFood([10, 10]);
    setSpeedBoost(null);
    setDirection(null);
    setGameOver(false);
    setScore(0);
    setIsGameStarted(false);
  };
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${neonWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          textAlign: 'center',
          textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080',
          marginBottom: '1rem',
        }}
      >
        Neon Snake
      </h1>
      <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>Score: {score}</p>
      {gameOver ? (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={startNewGame}
            style={{
              background: 'linear-gradient(135deg, #ff0080, #ff0080)',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080',
            }}
          >
            Start New Game
          </button>
        </div>
      ) : (
        <div
          style={{
            width: '400px',
            height: '400px',
            border: '2px solid #00ffff',
            borderRadius: '10px',
            position: 'relative',
            background: '#222',
            boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 55px #00ffff, 0 0 75px #00ffff',
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#00ff00',
                position: 'absolute',
                left: `${segment[0] * 20}px`,
                top: `${segment[1] * 20}px`,
                borderRadius: '50%',
                boxShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 55px #00ff00, 0 0 75px #00ff00',
              }}
            />
          ))}
          {food && (
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#ff0000',
                position: 'absolute',
                left: `${food[0] * 20}px`,
                top: `${food[1] * 20}px`,
                borderRadius: '50%',
                boxShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 55px #ff0000, 0 0 75px #ff0000',
              }}
            />
          )}
          {speedBoost && (
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: 'gold',
                position: 'absolute',
                left: `${speedBoost[0] * 20}px`,
                top: `${speedBoost[1] * 20}px`,
                borderRadius: '50%',
                boxShadow: '0 0 5px gold, 0 0 10px gold, 0 0 20px gold, 0 0 30px gold, 0 0 40px gold, 0 0 55px gold, 0 0 75px gold',
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;