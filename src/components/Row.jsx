import Tile from "./Tile";

export default function Row({ guess, currentGuess }) {
    if (guess) {
        return (
            <div className="row">
                {guess.map((tile, index) => (
                    <Tile
                        key={index}
                        letter={tile.letter}
                        status={tile.status}
                    />
                ))}
            </div>
        );
    }

    if (currentGuess) {
        const letters = currentGuess.split("");

        return (
            <div className="row">
                {[...Array(5)].map((_, index) => (
                    <Tile
                        key={index}
                        letter={letters[index] || ""}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="row">
            {[...Array(5)].map((_, index) => (
                <Tile key={index} letter="" />
            ))}
        </div>
    );
}