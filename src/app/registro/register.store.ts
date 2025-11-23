import { create } from "zustand";
import { registerDataSchema } from "./register.model";
import type { RegisterDataType } from "./register.types";

interface RegisterState {
	stepIndex: number;
	data: Partial<RegisterDataType>;
	modalOpen: boolean;
	nextStep: () => void;
	prevStep: () => void;
	updateData: (data: Partial<RegisterDataType>) => void;
	get: () => Partial<RegisterDataType>;
	isFinished: () => boolean;
}

export const useRegisterStore = create<RegisterState>((set, get) => ({
	stepIndex: 0,
	data: {},
	modalOpen: false,
	nextStep: () => set((s) => ({ stepIndex: s.stepIndex + 1 })),
	prevStep: () => set((s) => ({ stepIndex: Math.max(s.stepIndex - 1, 0) })),
	updateData: (data) => set((s) => ({ data: { ...s.data, ...data } })),
	get: () => get().data,
	isFinished: () =>
		get().stepIndex + 1 === Object.keys(registerDataSchema.shape).length,
}));
