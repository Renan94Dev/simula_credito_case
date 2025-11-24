import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const createPromiseWithRandomTimeout = (timeout?: number) => {
	return new Promise((resolve) =>
		setTimeout(resolve, Math.random() * (timeout || 5500)),
	);
};
