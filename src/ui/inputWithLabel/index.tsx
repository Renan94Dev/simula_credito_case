import { type InputHTMLAttributes, useId } from "react";

type Props = {
	label: string;
	type: InputHTMLAttributes<HTMLInputElement>["type"];
	placeholder: string;
};

const InputWithLabel = ({ label, type, placeholder, ...rest }: Props) => {
	const id = useId();

	return (
		<div className="flex flex-col space-y-2">
			<label className="text-sm text-zinc-500" htmlFor={id}>
				{label}
			</label>
			<input type={type} placeholder={placeholder} id={id} {...rest} />
		</div>
	);
};

export { InputWithLabel };
