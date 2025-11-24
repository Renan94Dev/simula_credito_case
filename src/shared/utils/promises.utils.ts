export const createPromiseWithRandomTimeout = async (timeout?: number) => {
	return new Promise((resolve) =>
		setTimeout(resolve, Math.random() * (timeout || 5500)),
	);
};
