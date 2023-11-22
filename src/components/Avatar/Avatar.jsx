import styles from "./Avatar.module.css";

const colours = ["#77ccff", "#ff6666", "#7878ff", "#99bb00"];

export function Avatar({ user: { name, available }, ...rest }) {
	const initials = name
		.split(" ")
		.map((word) => word[0].toUpperCase())
		.join("");
	const colourIndex = initials.split("").reduce((total, current) => total + current.charCodeAt(0), 0) % colours.length;
	const colour = colours[colourIndex];

	return (
		<div className={styles.container} {...rest}>
			<div className={styles.initials} style={{ backgroundColor: colour }}>
				{initials}
			</div>
			<div className={`${styles.status} ${available ? styles.online : styles.offline}`}></div>
		</div>
	);
}
