import styles from "./Tag.module.css";

export function Tag({ icon, text, ...rest }) {
	return (
		<div className={styles.container} {...rest}>
			{icon || <div className={styles.dot} />}
			{text && <div className={styles.text}>{text}</div>}
		</div>
	);
}
