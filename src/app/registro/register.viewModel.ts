import { createStep } from "@/shared/utils/steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { lazy } from "react";
import { useForm } from "react-hook-form";
import { emailSchema, personalSchema, phoneSchema } from "./register.model";
import { useRegisterStore } from "./register.store";
import type {
	EmailSchemaValuesType,
	PersonalSchemaValuesType,
	PhoneSchemaValuesType,
	StepConfigType,
} from "./register.types";

const StepPersonalLazy = lazy(() =>
	import("./steps/personal.step").then((m) => ({
		default: m.StepPersonal,
	})),
);

const StepEmailLazy = lazy(() =>
	import("./steps/email.step").then((m) => ({
		default: m.StepEmail,
	})),
);

const StepPhoneLazy = lazy(() =>
	import("./steps/phone.step").then((m) => ({
		default: m.StepPhone,
	})),
);

export const useRegisterViewModel = () => {
	const { isFinished, stepIndex, data, nextStep, prevStep, updateData } =
		useRegisterStore();

	const steps: StepConfigType = [
		createStep(
			useForm<PersonalSchemaValuesType>({
				resolver: zodResolver(personalSchema),
				defaultValues: { ...data },
				mode: "onBlur",
			}),
			StepPersonalLazy,
		),
		createStep(
			useForm<EmailSchemaValuesType>({
				resolver: zodResolver(emailSchema),
				defaultValues: { ...data },
				mode: "onBlur",
			}),
			StepEmailLazy,
		),
		createStep(
			useForm<PhoneSchemaValuesType>({
				resolver: zodResolver(phoneSchema),
				defaultValues: { ...data },
				mode: "onBlur",
			}),
			StepPhoneLazy,
		),
	] as const;

	const currentForm = steps[stepIndex];

	const onNext = currentForm?.form?.handleSubmit((values) => {
		updateData(values);

		if (isFinished()) {
			redirect("/dashboard");
		}

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
