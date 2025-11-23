import { BadgeDollarSign, ChevronDown } from "lucide-react";

export const Header = () => {
	return (
		<header className="flex items-center justify-between px-4 h-16 bg-white shadow-md z-10">
			<div className="flex items-center gap-2 text-primary">
				<BadgeDollarSign size={38} />
				<span className="font-medium text-xl">Simula crédito</span>
			</div>

			<div className="flex items-center gap-0.5 cursor-pointer">
				<span className="text-sm">Olá, Fulano</span>
				<span>
					<ChevronDown size={16} />
				</span>
			</div>
		</header>
	);
};
