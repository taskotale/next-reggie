import styles from '../styles/Social.module.css'; 

const SocialButtons = () => {
	return (
		<>
			<div className={styles['social-buttons']}>
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className={styles['social-icon']}
				>
					<i className="fab fa-facebook-f"></i>
				</a>
				<a
					href="https://x.com"
					target="_blank"
					rel="noopener noreferrer"
					className={styles['social-icon']}
				>
					<i className="fab fa-x"></i>
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className={styles['social-icon']}
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className={styles['social-icon']}
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
			</div>
		</>
	);
};

export default SocialButtons;
