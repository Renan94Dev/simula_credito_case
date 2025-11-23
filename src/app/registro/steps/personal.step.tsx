"use client";

import { InputWithLabel } from "@/ui/inputWithLabel";
import { Activity } from "react";
import { useHookFormMask } from "use-mask-input";
import type { PersonalSchemaValuesType, StepFormType } from "../register.types";

export const StepPersonal = ({
	hookForm,
}: StepFormType<PersonalSchemaValuesType>) => {
	const {
		register,
		formState: { errors },
	} = hookForm;

	const registerWithMask = useHookFormMask(register);

	return (
		<form className="space-y-4">
			<div className="space-y-0.5">
				<InputWithLabel
					type="text"
					label="Informe seu CPF"
					placeholder="CPF"
					{...registerWithMask("cpf", ["999.999.999-99"], {
						showMaskOnFocus: false,
					})}
				/>

				<Activity mode={errors?.cpf ? "visible" : "hidden"}>
					<p className="text-xs text-red-500 pl-0.5">{errors?.cpf?.message}</p>
				</Activity>
			</div>
		</form>
	);
};
