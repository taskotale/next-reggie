'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/BurgerMenu.module.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles['burger-icon']} onClick={toggleMenu}>
                <div className={isOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
                <div className={isOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
                <div className={isOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
            </div>
            <div className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu}>
                <Link href="/" onClick={toggleMenu}>
                    Home
                </Link>
                <Link href="/shows" onClick={toggleMenu}>
                    Shows
                </Link>
                <Link href="/media" onClick={toggleMenu}>
                    Media
                </Link>
                <Link href="/about" onClick={toggleMenu}>
                    About
                </Link>
                <Link href="/contact" onClick={toggleMenu}>
                    Contact
                </Link>
            </div>
        </>
    );
};

export default BurgerMenu;
