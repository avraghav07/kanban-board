export function ascendingCompare(item1, item2) {
	if (item1 === item2) {
		return 0;
	}
	return item1 > item2 ? 1 : -1;
}

export function descendingCompare(item1, item2) {
	return ascendingCompare(item1, item2) * -1;
}
