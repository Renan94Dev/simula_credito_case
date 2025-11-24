"use client";

import { InputWithLabel } from "@/ui/inputWithLabel";
import { useHookFormMask } from "use-mask-input";
import type { EmailSchemaValuesType, StepFormType } from "../register.types";

export const StepEmail = ({
	hookForm,
}: StepFormType<EmailSchemaValuesType>) => {
	const {
		register,
		formState: { errors },
	} = hookForm;

	const registerWithMask = useHookFormMask(register);

	return (
		<form className="space-y-6">
			<div className="space-y-0.5">
				<InputWithLabel
					type="email"
					label="Informe seu e-mail"
					placeholder="E-Mail"
					{...registerWithMask("email", ["email"])}
				/>
				{errors?.email && (
					<p className="text-xs text-red-500 pl-0.5">{errors.email.message}</p>
				)}
			</div>
		</form>
	);
};
