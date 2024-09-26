'use client'

import { useState } from 'react';
import styles from './About.module.css'; // Use CSS modules
import Image from 'next/image'; // Use Next.js Image component
import aboutImagePath from './IMG_3175.jpg'; // Image path for Next.js

function About() {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
        if (!showMoreInfo) {
            setTimeout(() => {
                const moreInfoSection = document.getElementById('more-info');
                if (moreInfoSection) {
                    moreInfoSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Adjust the delay if necessary
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles['about-container']}>
            <div className={styles['main-about']}>
                <div className={styles['image-container']}>
                    <Image
                        src={aboutImagePath}
                        alt="Reginald Wilson"
                        className={styles['profile-image']}
                        width={500} // Adjust as per the image dimensions
                        height={500} // Adjust as per the image dimensions
                    />
                </div>
                <div className={styles['bio-text']}>
                    <h1>Reginald L. Wilson, MFA</h1>
                    <p>
                        Reginald Wilson is an award-winning actor, director, and playwright
                        with a Master of Fine Arts in Theatre. With a passion for bringing
                        powerful stories to life, Reginald has worked on stage and in film,
                        leaving a lasting impression with every role he plays. Based in New
                        York City, Reginald has been recognized for his dynamic performances
                        in both classic and contemporary works, as well as his dedication to
                        mentoring the next generation of actors.
                    </p>
                    <button className={styles['learn-more']} onClick={toggleMoreInfo}>
                        {showMoreInfo ? 'Hide Info' : 'Learn More'}
                    </button>
                </div>
            </div>
            <div
                id="more-info"
                className={styles['more-info-section']}
                style={{ display: showMoreInfo ? 'block' : 'none' }}
            >
                <button
                    className={`${styles['more-info-close-btn']} ${styles['learn-more']}`}
                    onClick={toggleMoreInfo}
                >
                    Back to top
                </button>
                <div className={styles['more-info-section-details']}>
                    <h2>Honors & Awards</h2>
                    <br />
                    <p>
                        <strong>AUDELCO Awards:</strong> <br />- Best Solo Performance for{' '}
                        <strong>
                            <i>&quot;Sugar Ray&quot;</i>
                        </strong>{' '}
                        (2016)
                        <br />- Best Revival for{' '}
                        <strong>
                            <i>&quot;A Soldier’s Play&quot;</i>
                        </strong>{' '}
                        (2018)
                    </p>
                    <p>
                        - Broadway World Miami Best Supporting Actor (2021) <br />
                    </p>
                </div>
                <div className={styles['more-info-section-details']}>
                    <h2>Other Notable Roles</h2>
                    <br />
                    <p>
                        <i>
                            <strong>&quot;Fences&quot;</strong>
                        </i>
                        (Gallery Players)
                    </p>
                    <p>
                        <i>
                            <strong>&quot;Ma Rainey’s Black Bottom&quot;</strong>
                        </i>
                        (New Harlem Arts Theatre)
                    </p>
                </div>

                <div className={styles['more-info-section-details']}>
                    <h2>Directing & Playwriting</h2>
                    <p>
                        Directed: <br />
                        <strong>
                            <i>&quot;Dearly Departed&quot;</i>
                        </strong>
                        (Mars Hill University, 2018) <br />
                        <strong>
                            <i>&quot;A Soldier’s Play&quot;</i>
                        </strong>{' '}
                        (Negro Ensemble Company, 2017) <br />
                        Written: <br />
                        <strong>
                            <i>&quot;Scrambled Eggs&quot;</i>
                        </strong>{' '}
                        <br />
                        <strong>
                            <i>&quot;Dark Green Marine&quot;</i>
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
