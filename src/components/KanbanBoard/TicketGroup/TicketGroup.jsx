import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { priorities, statuses } from "config/api";
import { KanbanBoardContext } from "contexts/KanbanBoardContext";
import { useContext } from "react";
import { PiDotsThree, PiPlus } from "react-icons/pi";
import { TicketCard } from "./TicketCard";
import styles from "./TicketGroup.module.css";

export function TicketGroup({ name, tickets }) {
	const { groupBy, users } = useContext(KanbanBoardContext);
	let icon, text;
	if (groupBy === "status" || groupBy === "priority") {
		const item = (groupBy === "status" ? statuses : priorities)[name];
		icon = <item.icon />;
		text = item.text;
	} else if (groupBy === "userId") {
		const user = users.find((user) => user.id === name);
		icon = <Avatar user={user} />;
		text = user.name;
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.details}>
					{icon}
					<div>{text}</div>
					<div className={styles.count}>{tickets.length}</div>
				</div>
				<div className={styles.actions}>
					<Button variant="text">
						<PiPlus />
					</Button>
					<Button variant="text">
						<PiDotsThree />
					</Button>
				</div>
			</div>
			{tickets.map((ticket) => (
				<TicketCard key={ticket.id} ticket={ticket} user={users.find((user) => user.id === ticket.userId)} />
			))}
		</div>
	);
}
