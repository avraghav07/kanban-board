import styles from "./Popover.module.css";

export function Popover({ showPopover, setShowPopover, children, ...rest }) {
	return (
		showPopover && (
			<>
				<div
					className={styles.backdrop}
					onClick={() => {
						setShowPopover(false);
					}}
				/>
				<div className={styles.popover} {...rest}>
					{children}
				</div>
			</>
		)
	);
}
