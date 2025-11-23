"use client";

import { InputWithLabel } from "@/ui/inputWithLabel";
import type { EmailSchemaValuesType, StepFormType } from "../register.types";

export const StepEmail = ({
	hookForm,
}: StepFormType<EmailSchemaValuesType>) => {
	const {
		register,
		formState: { errors },
	} = hookForm;

	return (
		<form className="space-y-4">
			<div className="space-y-0.5">
				<InputWithLabel
					type="email"
					label="Informe seu e-mail"
					placeholder="E-Mail"
					{...register("email")}
				/>
				{errors?.email && (
					<p className="text-xs text-red-500 pl-0.5">{errors.email.message}</p>
				)}
			</div>
		</form>
	);
};
