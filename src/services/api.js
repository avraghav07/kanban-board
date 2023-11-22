import { dataEndpoint } from "config/api";

export async function getData() {
	const response = await fetch(dataEndpoint);
	const data = await response.json();
	return data;
}
