'use client'

import { useState } from 'react';
import styles from './Media.module.css';

import mediaLinks from './mediaLinks';

export default function ExpandableMediaPage() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>They say about me</div>
            <div className={styles.mediaGrid}>
                {mediaLinks.map((media) => (
                    <div key={media.id} className={styles.mediaCard} onClick={() => toggleExpand(media.id)}>
                        <div className={styles.mediaTitle}>{media.title}</div>
                        <div className={`${styles.mediaInfo} ${expandedId === media.id ? styles.expanded : ''}`}>
                            <p>{media.description}</p>
                            <a href={media.url} target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                                Visit
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

