import styles from "./Button.module.css";

export function Button({ children, startIcon, endIcon, variant = "outlined", ...rest }) {
	return (
		<button className={`${styles.container} ${styles[variant]}`} {...rest}>
			<div className={styles.left}>
				{startIcon}
				{children}
			</div>
			{endIcon}
		</button>
	);
}
