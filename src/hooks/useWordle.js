import { useState } from "react";
import { checkGuess } from "../utils/checkGuess";

export function useWordle(answer) {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState(Array(6).fill(null));
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const submitGuess = () => {
        // Stop if game is over
        if (turn > 5 || isCorrect) return;

        // Word must be exactly 5 letters
        if (currentGuess.length !== 5) return;

        const formattedGuess = checkGuess(currentGuess, answer);

        // Save guess
        setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });

        // Update keyboard colors
        setUsedKeys((prev) => {
            const newKeys = { ...prev };

            formattedGuess.forEach(({ letter, status }) => {
                const currentStatus = newKeys[letter];

                if (status === "correct") {
                    newKeys[letter] = "correct";
                } else if (
                    status === "present" &&
                    currentStatus !== "correct"
                ) {
                    newKeys[letter] = "present";
                } else if (
                    status === "absent" &&
                    !currentStatus
                ) {
                    newKeys[letter] = "absent";
                }
            });

            return newKeys;
        });

        // Check win
        if (currentGuess === answer) {
            setIsCorrect(true);
        }

        // Next turn
        setTurn((prev) => prev + 1);

        // Clear input
        setCurrentGuess("");
    };

    const handleKeyup = (key) => {
        if (isCorrect || turn > 5) return;

        if (key === "Enter") {
            submitGuess();
            return;
        }

        if (key === "Backspace") {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }

        if (/^[a-zA-Z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key.toLowerCase());
            }
        }
    };

    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        usedKeys,
        handleKeyup,
    };
}