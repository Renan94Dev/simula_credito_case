import type { ComponentType, JSX, LazyExoticComponent } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type z from "zod";
import type {
	emailSchema,
	personalSchema,
	phoneSchema,
	registerDataSchema,
} from "./register.model";

export type PersonalSchemaValuesType = z.infer<typeof personalSchema>;

export type EmailSchemaValuesType = z.infer<typeof emailSchema>;

export type PhoneSchemaValuesType = z.infer<typeof phoneSchema>;

export type StepType<T extends FieldValues> = {
	form: UseFormReturn<T>;
	Component: LazyExoticComponent<ComponentType<StepFormType<T>>>;
	render: () => JSX.Element;
};

export type StepConfigType = [
	StepType<PersonalSchemaValuesType>,
	StepType<EmailSchemaValuesType>,
	StepType<PhoneSchemaValuesType>,
];

export type StepFormType<T extends FieldValues> = {
	hookForm: UseFormReturn<T>;
};

export type RegisterDataType = z.infer<typeof registerDataSchema>;
