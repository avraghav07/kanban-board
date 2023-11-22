import {
	PiCellSignalFullDuotone,
	PiCellSignalLowDuotone,
	PiCellSignalMediumDuotone,
	PiCheckCircleDuotone,
	PiCircle,
	PiCircleDashed,
	PiCircleHalfDuotone,
	PiWarningCircleDuotone,
	PiXCircleDuotone,
} from "react-icons/pi";
import { TbLineDashed } from "react-icons/tb";

export const dataEndpoint = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const priorities = {
	4: { text: "Urgent", icon: PiWarningCircleDuotone },
	3: { text: "High", icon: PiCellSignalFullDuotone },
	2: { text: "Medium", icon: PiCellSignalMediumDuotone },
	1: { text: "Low", icon: PiCellSignalLowDuotone },
	0: { text: "No priority", icon: TbLineDashed },
};

export const priorityOrder = [4, 3, 2, 1, 0];

export const statuses = {
	Backlog: { text: "Backlog", icon: PiCircleDashed },
	Todo: { text: "Todo", icon: PiCircle },
	"In progress": { text: "In Progress", icon: PiCircleHalfDuotone },
	Done: { text: "Done", icon: PiCheckCircleDuotone },
	Canceled: { text: "Canceled", icon: PiXCircleDuotone },
};

export const statusOrder = Object.keys(statuses);
