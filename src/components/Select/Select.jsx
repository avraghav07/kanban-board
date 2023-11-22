import { PiCaretDown } from "react-icons/pi";
import styles from "./Select.module.css";

export function Select({ ...rest }) {
	return (
		<div className={styles.container}>
			<select className={styles.select} {...rest} />
			<PiCaretDown className={styles.caret} />
		</div>
	);
}
