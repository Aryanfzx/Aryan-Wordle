import { useEffect, useState } from "react";
import { getRandomWord } from "./utils/words";
import { useWordle } from "./hooks/useWordle";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

export default function App() {
  // Pick one random answer when the app loads
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

  // Listen for physical keyboard input
  useEffect(() => {
    if (isGameOver) return;

    const onKeyDown = (e) => {
      handleKeyup(e.key);
    };

    window.addEventListener("keydown", onKeyDown);

    // Remove the listener when the component updates or unmounts
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
    </div>
  );
}