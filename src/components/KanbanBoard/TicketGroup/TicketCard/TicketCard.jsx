import { Avatar } from "components/Avatar";
import { Tag } from "components/Tag";
import { priorities, statuses } from "config/api";
import { KanbanBoardContext } from "contexts/KanbanBoardContext";
import { useContext } from "react";
import styles from "./TicketCard.module.css";

export function TicketCard({ ticket: { id, title, tag, status, priority }, user }) {
	const { groupBy } = useContext(KanbanBoardContext);
	status = statuses[status];
	priority = priorities[priority];

	return (
		<div className={styles.container}>
			<div className={styles.details}>
				<div className={styles.idAndTitle}>
					<div className={styles.id}>{id}</div>
					<div className={styles.title}>
						{groupBy !== "status" && <status.icon className={styles.statusIcon} title={`Status: ${status.text}`} />}
						<div>{title}</div>
					</div>
				</div>
				{groupBy !== "userId" && <Avatar title={`User: ${user.name}`} user={user} />}
			</div>
			<div className={styles.tags}>
				{groupBy !== "priority" && <Tag icon={<priority.icon />} title={`Priority: ${priority.text}`} />}
				{tag.map((text) => (
					<Tag key={text} text={text} />
				))}
			</div>
		</div>
	);
}
