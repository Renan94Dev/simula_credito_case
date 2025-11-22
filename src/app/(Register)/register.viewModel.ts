import { zodResolver } from "@hookform/resolvers/zod";
import { createElement, lazy } from "react";
import { useForm } from "react-hook-form";
import { emailSchema, personalSchema } from "./register.model";
import { useRegisterStore } from "./register.store";
import type {
	EmailSchemaValuesType,
	PersonalSchemaValuesType,
	StepConfigType,
} from "./register.types";

export const useRegisterViewModel = () => {
	const { stepIndex, data, nextStep, prevStep, updateData } =
		useRegisterStore();

	const steps: StepConfigType = [
		{
			form: useForm<PersonalSchemaValuesType>({
				resolver: zodResolver(personalSchema),
				defaultValues: { ...data },
			}),
			Component: lazy(() =>
				import("./steps/personal.step").then((m) => ({
					default: m.StepPersonal,
				})),
			),
			render: function () {
				return createElement(this.Component, { hookForm: this.form });
			},
		},
		{
			form: useForm<EmailSchemaValuesType>({
				resolver: zodResolver(emailSchema),
				defaultValues: { ...data },
			}),
			Component: lazy(() =>
				import("./steps/email.step").then((m) => ({
					default: m.StepEmail,
				})),
			),
			render: function () {
				return createElement(this.Component, { hookForm: this.form });
			},
		},
	] as const;

	const currentForm = steps[stepIndex];

	const onNext = currentForm.form.handleSubmit((values) => {
		updateData(values);
		nextStep();
	});

	const onPrev = () => prevStep();

	const progress = ((stepIndex + 1) / steps.length) * 100;

	return {
		stepIndex,
		currentForm,
		onNext,
		onPrev,
		progress,
	};
};
