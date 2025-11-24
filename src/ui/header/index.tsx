import { ChevronDown } from "lucide-react";
import { Box } from "../box";
import { Logo } from "../logo";

export const Header = () => {
	return (
		<Box asChild>
			<header className="flex items-center justify-between px-6 h-16 z-10">
				<Logo />

				<div className="flex items-center gap-0.5 cursor-pointer">
					<span className="text-sm">Olá, Fulano</span>
					<span>
						<ChevronDown size={16} />
					</span>
				</div>
			</header>
		</Box>
	);
};
