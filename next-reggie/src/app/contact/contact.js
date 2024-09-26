import styles from './Contact.module.css';
import SocialButtons from '../components/Social';

const ContactMe = () => {
    return (
        <div className={styles['contact-container']}>
            <h1>Contact Me</h1>
            <form className={styles['contact-form']}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required />

                <button type="submit" className={styles['submit-btn']}>
                    Send Message
                </button>
            </form>
            <SocialButtons />
        </div>
    );
};

export default ContactMe;
