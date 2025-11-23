import type { StepFormType, StepType } from "@/app/registro/register.types";
import {
	type ComponentType,
	createElement,
	type LazyExoticComponent,
} from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export function createStep<T extends FieldValues>(
	form: UseFormReturn<T>,
	Component: LazyExoticComponent<ComponentType<StepFormType<T>>>,
): StepType<T> {
	return {
		form,
		Component,
		render: function () {
			return createElement(this.Component, { hookForm: this.form });
		},
	};
}
