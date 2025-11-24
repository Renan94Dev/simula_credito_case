import { BadgeDollarSign } from "lucide-react";

export const Logo = () => {
	return (
		<div className="flex items-center gap-2 text-primary">
			<BadgeDollarSign size={38} />
			<span className="font-medium text-xl">Simula crédito</span>
		</div>
	);
};
