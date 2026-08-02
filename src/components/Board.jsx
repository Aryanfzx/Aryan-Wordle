import Row from "./Row";

export default function Board({
    guesses,
    currentGuess,
    turn,
}) {
    return (
        <div className="board">
            {guesses.map((guess, index) => (
                <Row
                    key={index}
                    guess={guess}
                    currentGuess={
                        index === turn ? currentGuess : null
                    }
                />
            ))}
        </div>
    );
}