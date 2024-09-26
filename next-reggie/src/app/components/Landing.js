'use client'

import { useEffect, useState } from 'react';
import styles from '../styles/Landing.module.css';
import SocialButtons from './Social';

const Landing = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 1000); // Show after 1 second

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles['landing-page']}>
            <div className={styles['nameStamp']}>
                Reginald L. Wilson, MFA
                <SocialButtons />
            </div>
            {showMessage && (
                <div className={styles['overlay']}>
                    <div className={styles['landing-message']}>Reginald L. Wilson, MFA</div>
                    <SocialButtons />
                </div>
            )}
        </div>
    );
};

export default Landing;
