import { Button } from "components/Button";
import { Popover } from "components/Popover";
import { Select } from "components/Select";
import { priorityOrder, statusOrder } from "config/api";
import { KanbanBoardContext } from "contexts/KanbanBoardContext";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { PiCaretDown, PiSlidersHorizontalDuotone } from "react-icons/pi";
import { getData } from "services/api";
import { ascendingCompare, descendingCompare } from "utils/sorting";
import styles from "./KanbanBoard.module.css";
import { TicketGroup } from "./TicketGroup";

export function KanbanBoard() {
	const [tickets, setTickets] = useState([]);
	const [users, setUsers] = useState([]);
	const [groupBy, setGroupBy] = useLocalStorage("groupBy", "status");
	const [sortBy, setSortBy] = useLocalStorage("sortBy", "priority");
	const [showPopover, setShowPopover] = useState(false);
	let groupedTickets;
	if (groupBy === "status" || groupBy === "priority") {
		groupedTickets = [];
		const order = groupBy === "status" ? statusOrder : priorityOrder;
		for (const key of order) {
			groupedTickets.push([key, tickets.filter((ticket) => ticket[groupBy] === key)]);
		}
	} else {
		groupedTickets = Object.entries(Object.groupBy(tickets, (ticket) => ticket[groupBy]));
	}

	useEffect(() => {
		getData().then((data) => {
			setTickets(data.tickets);
			setUsers(data.users);
		});
	}, [setTickets, setUsers]);

	return (
		<div>
			<div className={styles.header}>
				<Button
					endIcon={<PiCaretDown />}
					onClick={() => {
						setShowPopover(!showPopover);
					}}
					startIcon={<PiSlidersHorizontalDuotone />}
				>
					Display
				</Button>
				<Popover setShowPopover={setShowPopover} showPopover={showPopover}>
					<div className={styles.selectContainer}>
						<div>Grouping</div>
						<Select
							onChange={(e) => {
								setGroupBy(e.target.value);
								setShowPopover(false);
							}}
							value={groupBy}
						>
							<option value="status">Status</option>
							<option value="userId">User</option>
							<option value="priority">Priority</option>
						</Select>
					</div>
					<div className={styles.selectContainer}>
						<div>Ordering</div>
						<Select
							onChange={(e) => {
								setSortBy(e.target.value);
								setShowPopover(false);
							}}
							value={sortBy}
						>
							<option value="priority">Priority</option>
							<option value="title">Title</option>
						</Select>
					</div>
				</Popover>
			</div>
			<KanbanBoardContext.Provider value={{ groupBy, users }}>
				<div className={styles.ticketGroups}>
					{groupedTickets.map(([group, tickets]) => (
						<TicketGroup
							key={group}
							name={group}
							tickets={tickets.sort((ticket1, ticket2) =>
								(sortBy === "priority" ? descendingCompare : ascendingCompare)(ticket1[sortBy], ticket2[sortBy]),
							)}
						/>
					))}
				</div>
			</KanbanBoardContext.Provider>
		</div>
	);
}
