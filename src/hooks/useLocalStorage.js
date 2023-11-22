import { useState } from "react";

export function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(localStorage.getItem(key) || initialValue);
	function setValueWrapper(value) {
		setValue(value);
		localStorage.setItem(key, value);
	}
	return [value, setValueWrapper];
}
