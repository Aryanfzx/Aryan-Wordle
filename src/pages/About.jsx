import React from 'react';

export default function About() {
    return (
        <div style={styles.container}>
            <h2>About Aryan Wordle</h2>
            <p>This is a custom Wordle clone built with React and Vite, hosted seamlessly via GitHub Pages.</p>
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