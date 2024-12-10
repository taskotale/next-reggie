'use client'

import styles from './Shows.module.css';
import { useState } from 'react';

export default function ShowsPage({ images }) {
    const [activeTile, setActiveTile] = useState(null);

    const handleTouch = (id) => {
        setActiveTile(id === activeTile ? null : id); // Toggle enlarge on touch
    };

    if (!images) {
        return <p>No images found.</p>; // Show a message if no images are provided
      }

    return (
        <div className={styles.gridContainer}>
            {images.slice().reverse().map((src, index) => (
                <div
                    key={index}
                    className={`${styles.tile} ${index % 3 === 0 ? styles.large : index % 2 === 0 ? styles.medium : styles.small} ${activeTile === index ? styles.active : ''
                        }`}
                    onTouchStart={() => handleTouch(index)}
                    onMouseEnter={() => setActiveTile(index)}
                    onMouseLeave={() => setActiveTile(null)}
                >
                    <img src={src} alt={`Tile ${index}`} className={styles.image} />
                </div>
            ))}
        </div>
    );
}

