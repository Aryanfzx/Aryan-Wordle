const KEYS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

export default function Keyboard({
    usedKeys,
    onKeyPress,
}) {
    return (
        <div className="keyboard">
            {KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((key) => (
                        <button
                            key={key}
                            className={`key ${usedKeys[key.toLowerCase()] || ""}`}
                            onClick={() => onKeyPress(key)}
                        >
                            {key === "Backspace" ? "⌫" : key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}