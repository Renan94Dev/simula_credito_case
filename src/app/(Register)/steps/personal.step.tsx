"use client";

import { InputWithLabel } from "@/ui/inputWithLabel";
import type { PersonalSchemaValuesType, StepFormType } from "../register.types";

export const StepPersonal = ({
	hookForm,
}: StepFormType<PersonalSchemaValuesType>) => {
	const {
		register,
		formState: { errors },
	} = hookForm;

	return (
		<form className="space-y-4">
			<div className="space-y-0.5">
				<InputWithLabel
					type="text"
					label="Informe seu CPF"
					placeholder="CPF"
					{...register("cpf")}
				/>
				{errors?.cpf && (
					<p className="text-xs text-red-500 pl-0.5">{errors.cpf.message}</p>
				)}
			</div>
		</form>
	);
};
