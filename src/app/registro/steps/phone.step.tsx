"use client";

import { InputWithLabel } from "@/ui/inputWithLabel";
import { useHookFormMask } from "use-mask-input";
import type { PhoneSchemaValuesType, StepFormType } from "../register.types";

export const StepPhone = ({
	hookForm,
}: StepFormType<PhoneSchemaValuesType>) => {
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
					label="Informe seu telefone"
					placeholder="Telefone"
					{...registerWithMask("phone", ["(99) 99999-9999"])}
				/>
				{errors?.phone && (
					<p className="text-xs text-red-500 pl-0.5">{errors.phone.message}</p>
				)}
			</div>
		</form>
	);
};
