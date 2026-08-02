export const WORDS = [
    "apple", "brave", "crane", "flame", "grape", "house", "light", "mouse",
    "zebra", "tiger", "eagle", "shark", "whale", "peach", "mango", "lemon",
    "berry", "chess", "piano", "dream", "cloud", "storm", "river", "ocean",
    "beach", "forest", "mount", "grass", "stone", "brick", "chair", "table",
    "glass", "candy", "bread", "honey", "sugar", "spice", "flour", "pizza",
    "pasta", "steak", "salad", "onion", "garlic", "basil", "robot", "laser",
    "space", "comet", "earth", "venus", "saturn", "pluto", "jelly", "toast",
    "camel", "horse", "sheep", "goose", "koala", "panda", "otter", "snake",
    "crown", "sword", "armor", "magic", "witch", "fairy", "giant", "dwarf",
    "angel", "demon", "smile", "laugh", "happy", "lucky", "quiet", "quick",
    "smart", "sharp", "fresh", "clean", "sweet", "spicy", "salty", "bloom",
    "flute", "drums", "viola", "guitar", "music", "dance", "party", "movie",
    "radio", "phone", "watch", "clock", "money", "green", "black", "white",
    "brown", "purple", "silver", "golden", "orange", "violet", "indigo",
    "north", "south", "east", "west", "round", "square", "solid", "water",
    "metal", "paper", "cloth", "cabin", "hotel", "tower", "castle", "village",
    "market", "school", "garden", "window", "rocket", "planet", "galaxy",
    "banana", "orange", "tomato", "pepper", "cookie", "butter", "coffee",
    "rocket", "bridge", "tunnel", "engine", "flight", "travel", "border",
    "winter", "summer", "spring", "autumn", "frozen", "desert", "island",
    "helmet", "jacket", "pocket", "basket", "bottle", "pencil", "eraser",
    "coding", "python", "javascript", "binary", "server", "client", "router"
];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
}