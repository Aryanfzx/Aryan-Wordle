export const WORDS = [
    "apple",
    "brave",
    "crane",
    "flame",
    "grape",
    "house",
    "light",
    "mouse",
    "zebra",
    "tiger",
    "eagle",
    "shark",
    "peach",
    "mango",
    "lemon",
    "river",
    "cloud",
    "storm",
    "chair",
    "table"
];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
}