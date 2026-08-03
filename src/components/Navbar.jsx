import React from 'react';

export default function Navbar({ setCurrentPage }) {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>Aryan Wordle</h2>
            <ul style={styles.ul}>
                <li><button style={styles.button} onClick={() => setCurrentPage('home')}>Home</button></li>
                <li><button style={styles.button} onClick={() => setCurrentPage('about')}>About</button></li>
                <li><button style={styles.button} onClick={() => setCurrentPage('contact')}>Contact</button></li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#121213',
        color: '#ffffff',
        borderBottom: '1px solid #3a3a3c',
    },
    logo: {
        margin: 0,
        fontSize: '1.5rem',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        margin: 0,
        padding: 0,
    },
    button: {
        background: 'none',
        border: 'none',
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '1rem',
    }
};