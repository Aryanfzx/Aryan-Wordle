import React from 'react';

export default function Contact() {
    return (
        <div style={styles.container}>
            <h2>Contact Us</h2>
            <p>Have questions or feedback? Feel free to reach out via GitHub or email.</p>
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