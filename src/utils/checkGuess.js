export function checkGuess(guess, answer) {
    guess = guess.toLowerCase();
    answer = answer.toLowerCase();

    const guessLetters = guess.split("");
    const answerLetters = answer.split("");

    const result = guessLetters.map((letter) => ({
        letter,
        status: "absent",
    }));

    // Count how many times each letter appears in the answer
    const letterCounts = {};

    for (const letter of answerLetters) {
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }

    // Pass 1: Mark correct letters (green)
    for (let i = 0; i < guessLetters.length; i++) {
        if (guessLetters[i] === answerLetters[i]) {
            result[i].status = "correct";
            letterCounts[guessLetters[i]]--;
        }
    }

    // Pass 2: Mark present letters (yellow)
    for (let i = 0; i < guessLetters.length; i++) {
        if (result[i].status === "correct") continue;

        const letter = guessLetters[i];

        if (letterCounts[letter] > 0) {
            result[i].status = "present";
            letterCounts[letter]--;
        }
    }

    return result;
}