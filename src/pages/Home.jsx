import React from 'react';

export default function Home() {
    return (
        <div style={styles.container}>
            <h1>Welcome to Aryan Wordle</h1>
            <p>Guess the hidden word in 6 tries. Get started and test your vocabulary!</p>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '4rem 2rem',
        color: '#ffffff',
    }
};