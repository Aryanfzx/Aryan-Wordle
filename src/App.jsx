import { useEffect, useState } from "react";
import { getRandomWord } from "./utils/words";
import { useWordle } from "./hooks/useWordle";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

export default function App() {
  const [answer] = useState(() => getRandomWord());

  const {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
  } = useWordle(answer);

  const isGameOver = isCorrect || turn > 5;

  useEffect(() => {
    if (isGameOver) return;

    const onKeyDown = (e) => {
      handleKeyup(e.key);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleKeyup, isGameOver]);

  // Start a new game
  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>React Wordle</h1>

      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        turn={turn}
      />

      <Keyboard
        usedKeys={usedKeys}
        onKeyPress={handleKeyup}
      />

      {isCorrect && (
        <div className="result">
          <h2>🎉 Congratulations!</h2>
          <p>You guessed the word in {turn} {turn === 1 ? "guess" : "guesses"}.</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}

      {!isCorrect && turn > 5 && (
        <div className="result">
          <h2>😢 Game Over</h2>
          <p>The correct word was <strong>{answer}</strong>.</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}

      <div className="demo-section" style={{ textAlign: 'center', padding: '20px', marginTop: '20px' }}>
        <h3>Project Demo Video</h3>
        <a href="https://drive.google.com/file/d/1G1xuWc2_Q0kRYAmOQWzrlmJ4WUfP5mK0/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Watch Demo Video</button>
        </a>
      </div>
    </div>
  );
}